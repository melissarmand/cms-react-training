// import comics from '../../data.json'
import comics from '../data.json';
import styles from '../styles/Home.module.css'

export default function Comic() {
        console.log(comics);
    return (
        
        <div className={styles.card}>
            <h1>The Comics</h1>
            {comics && comics.map(({title, thumbnail, id}) => (
                <div key ={id} className='grid'>
                    <h2>{title}</h2>
                    <div className='photo'>
                        <img src={thumbnail}/>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

// const getComics = () => {
//     fetch()
//         .then((data) => {
//             console.log(data)
//             return data.json();
//         })}

//        getComics();


// function Comic() {
//     return (
//         <div className="Comic">
//             <h1>
//                 This is where the comic's title will go.
//                 {/* {Comic.title} */}
//             </h1>
//         </div>
//     )
// };

// export default Comic