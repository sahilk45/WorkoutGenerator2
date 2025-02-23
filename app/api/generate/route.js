import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { height, weight, age } = body;

        // Validate inputs
        if (!height || !weight || !age || isNaN(height) || isNaN(weight) || isNaN(age)) {
            return NextResponse.json(
                { error: "Height ,weight and age are required and must be numbers" },
                { status: 400 }
            );
        }

        // Calculate BMI
        const bmi = weight / ((height / 100) ** 2);
        
        let category = "";
        if (bmi < 18.5) category = "underweight";
        else if (bmi < 25) category = "normal";
        else if (bmi < 30) category = "overweight";
        else category = "obese";

        const prompt = `
    A person aged ${age} has a BMI of ${bmi.toFixed(1)}, categorized as ${category}.
    Generate a *detailed and diversified* personalized workout and nutrition plan, considering their age as a significant factor.

    *Workout Plan:*
    - Warm-up: Include dynamic stretches and light cardio.
    - Main Exercises: Provide 3-4 diversified exercises targeting different muscle groups. Include variations for beginners, intermediate, and advanced levels.
    - Cool-down: Include static stretches and relaxation techniques.

    *Nutrition Plan:*
    - Breakfast: Suggest 2-3 diversified options with macronutrient breakdown (carbs, proteins, fats).
    - Lunch: Suggest 2-3 diversified options with macronutrient breakdown.
    - Dinner: Suggest 2-3 diversified options with macronutrient breakdown.
    - Snacks: Suggest 1-2 healthy snack options.

    Ensure the plans are age-appropriate and tailored to the person's BMI category (${category}).
`;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const generatedText = result.response.text();

        return NextResponse.json({
            bmi: bmi.toFixed(1),
            category,
            recommendations: generatedText
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}