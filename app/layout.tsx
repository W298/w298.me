import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <head />
      <body>
        <div
          style={{
            background: "linear-gradient(43deg, #4158D0, #C850C0, #FFCC70)",
            width: "100%",
            height: "4px",
          }}
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
