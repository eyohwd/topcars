
import ImageSlider from "./ImageSlider";

function App() {
  const slides=[
    { url: "https://cdn.motor1.com/images/mgl/39ygL/s1/pagani-huayra.webp"},
     { url:  "https://cdn.motor1.com/images/mgl/4007M1/s1/de-tomaso-p72-baby-blue-lake-como.webp", title: "D Tomaso P72", price: "$1.4Million"},
      {url: "https://cdn.motor1.com/images/mgl/XPWO2/s1/mclaren-elva.webp", title: "Mc Laren Elva", price: "$1.7 Million"},
      {url:"https://cdn.motor1.com/images/mgl/7ypK7/s1/ferrari-monza-sp1.webp", title: "Ferrari Monza", price: "$1.7 Million"},
      {url: "https://cdn.motor1.com/images/mgl/Vz837L/s1/gordon-murray-t.33.webp", title: "Gordon Murray T.33", price: "$1.7 Million"},     
    {url: "https://cdn.motor1.com/images/mgl/NGGZon/s1/koenigsegg-gemera.webp", title: "Koenigsegg Gemera", price: "$1.7 Million"},
    {url: "https://cdn.motor1.com/images/mgl/QeeWgN/s1/zenvo-tsr-s.webp", title: "Zenvo TSR-S", price: '$1.7 Million'},
    {url: "https://cdn.motor1.com/images/mgl/eooYnN/s1/hennessey-venom-f5.webp", title: "Hennessey Venom-F5", price: "$1.8 Million"},
    {url: "https://cdn.motor1.com/images/mgl/JPGqE/s1/bentley-bacalar.webp", title: "Bentley Bacalar", price: "$1.9 Million"},
    {url: "https://cdn.motor1.com/images/mgl/G33JZA/s1/bentley-mulliner-batur.webp", title: "Bentley Mulliner Batur", price: "$2.0 Million"},
  ];
  const containerStyles={
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
    <h1 style={{marginLeft: "480px"}}>Top 10 Cars In The World</h1>
      <div style={containerStyles}>
      <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
