import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repellendus molestiae sunt ad nesciunt aliquid eligendi eaque esse
          nihil perspiciatis, cumque quisquam architecto. Inventore iusto rerum
          beatae, sapiente eaque dolore similique animi unde quas itaque
          quibusdam, iure quod, commodi numquam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          dolor ratione laudantium vero quia molestias quisquam fugit deserunt
          eaque nemo fugiat animi, maxime assumenda. Explicabo iste at beatae
          voluptas sunt dolorem eius distinctio reiciendis, voluptatem, nemo
          laudantium, dolorum consequatur perspiciatis ullam quos odit sit!
          Quisquam dolor rem dolore aspernatur officiis, sunt totam illo.
          Cumque, placeat.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          quisquam doloribus eaque quas molestiae cumque repellendus
          voluptatibus sit recusandae, tenetur sint veritatis in, alias facilis
          iste saepe, quos nulla atque similique illo! Doloribus expedita
          recusandae qui rerum sunt id. Minima facilis aut fugit quos dolorem
          numquam voluptas officia obcaecati esse nemo quasi repellat possimus
          illo sint cupiditate qui, corporis tempore! Atque alias aperiam,
          cupiditate maiores impedit quo iste velit eligendi dolores sint!
          Soluta voluptatibus illum quasi modi vel quibusdam iste deserunt
          incidunt fuga cumque iure, repellendus sapiente officia numquam, nam
          tempora rem a. Ea nostrum corporis blanditiis voluptatum maiores
          deserunt perspiciatis commodi! Quisquam pariatur sint quos placeat
          dignissimos qui eveniet velit.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          obcaecati quidem ut voluptas animi, nostrum nam dolores ipsum unde.
          Eum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          accusantium facilis nostrum, autem, deserunt odio placeat cumque quia
          totam corrupti asperiores. Non, adipisci quo deserunt voluptatem illo
          corporis cupiditate id perferendis voluptas. Vitae quam vel fuga
          deserunt quidem accusantium corporis assumenda autem! Consequatur,
          sunt? Autem fuga quidem iusto iste explicabo, ad facilis sunt id
          doloremque provident, omnis molestiae alias. Quos, soluta. Quae aut
          voluptas atque perferendis quis modi laboriosam molestiae fuga dolores
          qui, ad reprehenderit voluptatibus officiis dolor, ullam repellat
          harum tempore corrupti cupiditate? Hic eos ad, veritatis in maiores
          consequatur dolorem voluptas debitis recusandae provident eligendi sed
          architecto. Veritatis amet exercitationem soluta tenetur sint impedit,
          voluptatem sed quam quos illo provident dolorum dolore temporibus vero
          fugiat. Voluptatem nobis sed perspiciatis cum itaque fugiat officiis
          quisquam optio minus eius eum sapiente voluptates ut eos ab facilis
          delectus recusandae, non deleniti rem incidunt quasi? Atque,
          voluptatibus sint dolores quos rem, similique nesciunt quo autem
          repellat sapiente ex doloremque. Vel ullam saepe voluptatibus
          obcaecati nobis illo magni distinctio, magnam non nostrum eveniet
          dolorum cum vitae expedita iure fugiat explicabo nulla amet accusamus
          minus earum consectetur? Tempora a quo sed alias. Optio beatae eos ad
          asperiores aperiam repellat labore accusantium quis cumque facilis.
        </p>
      </div>
    </section>
  );
};
export default PostDetail;
