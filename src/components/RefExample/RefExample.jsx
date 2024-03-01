import { useEffect, useRef } from "react";

const RefExample = () => {
  const formRef = useRef();

  const handleScroll = () => {
    const dims = formRef.current.getBoundingClientRect();
    window.scrollTo({
      top: dims.top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <button onClick={handleScroll}>Schedule a coaching session</button>
      </div>

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolores
        esse quam reprehenderit quasi deserunt iure fugiat corrupti adipisci
        blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus sed, incidunt fugit, commodi nisi numquam earum voluptates
        animi dicta natus doloremque consequuntur ipsum nesciunt exercitationem
        deleniti. Consequatur minima facilis iste! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Ad magnam omnis voluptate sunt laborum
        quasi necessitatibus architecto. Eum iure maxime delectus omnis tempore
        quo, rem, doloremque suscipit ducimus, facilis ab. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Fugit cumque neque facilis
        minima, enim odit provident, quibusdam doloremque praesentium ipsam
        ullam voluptate animi? Quis, suscipit? Cupiditate enim asperiores earum
        repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tenetur id magni, accusantium obcaecati eum dolorem et voluptates ullam
        inventore? Beatae provident praesentium cum id ea nemo quae accusantium
        pariatur expedita. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quas illum dolorem tempora eligendi tenetur ex, quis ea, hic est
        voluptatibus officiis repudiandae inventore dicta, consectetur possimus
        nam cum. Possimus, animi? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores minus veniam labore id, quis quidem adipisci
        at unde aspernatur necessitatibus, magni, reprehenderit numquam beatae
        cumque voluptate pariatur eligendi sed deleniti? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti, nulla. Minus, ad id! Earum
        ipsa accusantium quidem! Repudiandae recusandae quaerat eos aut natus!
        Voluptate delectus velit sunt fuga at ullam? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Libero dolorum, repellendus non repellat
        quibusdam eos, obcaecati maiores veritatis laborum sint illum aliquid,
        aut eius delectus perferendis explicabo ipsum nulla totam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Vero quisquam, perspiciatis
        laboriosam facere molestias beatae voluptas tenetur porro ab, cupiditate
        ea eligendi asperiores sunt praesentium dolorum consequuntur? Fuga,
        reprehenderit eius. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Doloremque labore reiciendis aspernatur est quos maiores quaerat
        delectus vel omnis id numquam veniam, ipsum recusandae sunt non
        excepturi odit voluptatibus facere. Quas culpa eum fugiat, soluta odit
        neque nemo voluptatibus eligendi! Lorem ipsum, dolor sit amet minima,
        enim odit provident, quibusdam doloremque praesentium ipsam ullam
        voluptate animi? Quis, suscipit? Cupiditate enim asperiores earum
        repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tenetur id magni, accusantium obcaecati eum dolorem et voluptates ullam
        inventore? Beatae provident praesentium cum id ea nemo quae accusantium
        pariatur expedita. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quas illum dolorem tempora eligendi tenetur ex, quis ea, hic est
        voluptatibus officiis repudiandae inventore dicta, consectetur possimus
        nam cum. Possimus, animi? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores minus veniam labore id, quis quidem adipisci
        at unde aspernatur necessitatibus, magni, reprehenderit numquam beatae
        cumque voluptate pariatur eligendi sed deleniti? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti, nulla. Minus, ad id! Earum
        ipsa accusantium quidem! Repudiandae recusandae quaerat eos aut natus!
        Voluptate delectus velit sunt fuga at ullam? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Libero dolorum, repellendus non repellat
        quibusdam eos, obcaecati maiores veritatis laborum sint illum aliquid,
        aut eius delectus perferendis explicabo ipsum nulla totam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Vero quisquam, perspiciatis
        laboriosam facere molestias beatae voluptas tenetur porro ab, cupiditate
        ea eligendi asperiores sunt praesentium dolorum consequuntur? Fuga,
        reprehenderit eius. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Doloremque labore reiciendis aspernatur est quos maiores quaerat
        delectus vel omnis id numquam veniam, ipsum recusandae sunt non
        excepturi odit voluptatibus facere. Quas culpa eum fugiat, soluta odit
        neque nemo voluptatibus eligendi! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quo repudiandae dolore itaque, ex nisi
        eaque sit dicta! Eveniet qui neque, temporibus nobis, ratione atque
        eligendi fugit, laboriosam mollitia quisquam dignissimos. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Nisi doloribus illo
        cumque, earum sed quod labore, velit nobis animi sunt repudiandae at
        numquam dolorem similique veritatis alias expedita! Eaque, ad? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Unde magnam,
        aspernatur voluptates tempore inventore quidem omnis repudiandae fuga ut
        eligendi accusamus quos dolor commodi deserunt. Iste provident ut eius
        beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo repudiandae sit doloremque omnis cum, optio cupiditate
        mollitia iure aspernatur soluta reprehenderit id eius, vel ut odio
        pariatur sunt minima veniam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Iusto cumque similique aliquid asperiores quas.
        Incidunt similique ullam, placeat natus sint repellendus voluptate
        provident nemo laboriosam, assumenda inventore quis itaque impedit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        quaerat quas qui! A libero ipsum soluta eveniet incidunt, ut eum eaque
        earum excepturi delectus quo veniam commodi ab modi reiciendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolor provident iure
        velit necessitatibus assumenda blanditiis eligendi voluptate, distinctio
        illo tempore beatae delectus dolorem sed culpa ad architecto ut rerum
        consectetur adipisicing elit. Quo repudiandae dolore itaque, ex nisi
        eaque sit dicta! Eveniet qui neque, temporibus nobis, ratione atque
        eligendi fugit, laboriosam mollitia quisquam dignissimos. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Nisi doloribus illo
        cumque, earum sed quod labore, velit nobis animi sunt repudiandae at
        numquam dolorem similique veritatis alias expedita! Eaque, ad? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Unde magnam,
        aspernatur voluptates tempore inventore quidem omnis repudiandae fuga ut
        eligendi accusamus quos dolor commodi deserunt. Iste provident ut eius
        beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo repudiandae sit doloremque omnis cum, optio cupiditate
        mollitia iure aspernatur soluta reprehenderit id eius, vel ut odio
        pariatur sunt minima veniam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Iusto cumque similique aliquid asperiores quas.
        Incidunt similique ullam, placeat natus sint repellendus voluptate
        provident nemo laboriosam, assumenda inventore quis itaque impedit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        quaerat quas qui! A libero ipsum soluta eveniet incidunt, ut eum eaque
        earum excepturi delectus quo veniam commodi ab modi reiciendis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolor provident iure
        velit necessitatibus assumenda blanditiis eligendi voluptate, distinctio
        illo tempore beatae delectus dolorem sed culpa ad architecto ut rerum
        eum!
      </div>

      <form ref={formRef}>
        <input type="email" placeholder="Your email" />
        <button>Schedule now</button>
      </form>
      <div></div>
    </>
  );
};

export default RefExample;
