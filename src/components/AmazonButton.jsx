export default function AmazonButton(props) {
  const asin = props.asin;
  const text = props.text;
  
  if (!asin) {
    return null;
  }

  const tag = "jaime420-21";
  const baseUrl = "https://www.amazon.es/dp/";
  const url = baseUrl + asin + "?tag=" + tag;
  const buttonText = text ? text : "Ver en Amazon";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
      {buttonText}
    </a>
  );
}