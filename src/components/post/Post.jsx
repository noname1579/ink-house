import './Post.css'

export default function Post ({pictureUrl, author, title, body, price}) {

  return (
    <div className='catalog_post'> 
      <div className="catalog_post_data" >
        <img src={pictureUrl} />
        <p>{author}</p>
        <h1>{title}</h1>
        <h2>{body}</h2>
        <h3>{price}</h3>
        <button>В корзину</button>
      </div>
    </div>
  )
}