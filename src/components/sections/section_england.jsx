import Post from "../post/Post";
import data from "../../data/data_england";

export default function Section_england () {
  return (
    <>
      {data.map(p => 
        <Post key={p.id} pictureUrl={p.picture} author={p.author} title={p.title} body={p.body} price={p.price} />
      )}
    </>
  )
}