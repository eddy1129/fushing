export default function Title({ mainTitle, fuck }) {
  return (
    <div>
      <h1 style={{ borderBottom: "5px solid red", textAlign: "center" }}>
        {mainTitle}
        {fuck}
      </h1>
    </div>
  );
}
