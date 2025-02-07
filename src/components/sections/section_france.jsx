import Post from "../post/Post";
import data from "../../data/data_france";

export default function Section_france () {
  return (
    <>
      {data.map(p => 
        <Post key={p.id} pictureUrl={p.picture} author={p.author} title={p.title} body={p.body} price={p.price} />
      )}
    </>
  )
}