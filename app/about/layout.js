import Link from "next/link";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <br></br>
      <Link
        style={{
          width: "400px",
          margin: "auto",
          textAlign: "",
          padding: "20px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
        href={"/"}
      >
        TB2G
      </Link>

      {children}
    </html>
  );
}
