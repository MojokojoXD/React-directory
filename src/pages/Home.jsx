import MainBody from "../components/MainBody";

function Home(){
    return (
      <section
        id="home-page"
        style={{
          height: "auto",
          backgroundColor: "#222222",
        }}
      >
        <div style={homeBar}>
          <div style={header}>
            <h1>Home</h1>
          </div>
        </div>
        <div>
            <MainBody/>
        </div>
      </section>
    );
}

const homeBar = {
  display:'flex',
  height: "10vh",
  width: "inherit",
  backgroundColor: "#34A5DA",
  padding: '0 20px'
};

const header={
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto 0'
}



export default Home;