export default function LibraryLayout({ children }) {
    return (
      <div className="min-h-screen bg-black">
        <main>{children}</main>
      </div>
    );
  }