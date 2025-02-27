
import { useState } from "react";
import Header from "../../components/header";
import memory from "../../services/memory";
import "./new-memory.css";

const NewMemory = () =>{
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [useFeedBack, setUseFeedBack] = useState("");
const [image, setImages] = useState([]);
const [imageURLs, setImageURLs] = useState([]);

const onSetImage = (event) => {
    console.log("Chegou ate aqui ")
    const files = event.targetfiles;
    setImages(files);
    for (let contador = 0; contador < files.length;contador++){
        const file = files[contador]; 
        const thumbmail = URL.createObjectURL(file);
        setImageURLs.push(thumbmail);
    }

}

// Função assíncrona para criar uma nova memória
const onCreateMemory = async () => {
    let payload = {
        title: title, // Título da memória
        description: description, // Descrição da memória
        images: images, // Lista de imagens
        date: new Date().toISOString() // Data da criação no formato ISO
    };

    let response = await memoryService.createMemory(payload); // Envia os dados para o serviço

    if (response) { // Se a resposta for bem-sucedida
        setUserFeedBack("Memória criada com sucesso!"); // Exibe um feedback positivo

        setTimeout(() => {
            setUserFeedBack(""); // Limpa o feedback após 5 segundos
        }, 5000);

        // Reseta os campos do formulário
        setTitle("");
        setDescription("");
        setImage([]);
        setImageURLs([]);
    }
}

const createMemory = async (memory) => {
    const images = memory.images; // Obtém a lista de imagens da memória
    const base64Images = []; // Array para armazenar as imagens convertidas para Base64

    for (let i = 0; i < images.length; i++) { // Percorre todas as imagens
        const base64 = await imageToBase64(images[i]); // Converte a imagem para Base64
        base64Images.push(base64); // Adiciona a imagem convertida ao array
    }

    memory.images = base64Images; // Substitui a lista de imagens pelos valores convertidos para Base64

    const response = await fetch(`${API_URL}/memories`, {
        method: "POST", // Define o método HTTP como POST
        headers: {
            "Content-Type": "application/json" // Define o cabeçalho da requisição como JSON
        },
        body: JSON.stringify(memory) // Converte o objeto da memória para JSON e envia no corpo da requisição
    });

    return response.json(); // Retorna a resposta da API convertida para JSON
}
return( 
    <>
        <Header/>
        <main className="app-main">
        <h1>Criar memória</h1>

        <p className="feedback">{useFeedBack}</p>

        <div className="form-container">
            <label>
                <span>Título</span>
                <input onChange={event => setTitle(event.target.value)} type="text" placeholder="Insira o título aqui." />
            </label>

            <label>
                <span>Descrição</span>
                <textarea onChange={event => setDescription(event.target.value)} placeholder="Insira a descrição aqui."></textarea>
            </label>

            <label htmlFor="file-input" className="file">
                <span>Imagens</span>
                <span className="input-file-button">Adicionar imagem</span>
                <input onChange={event => onSetImage(event)} id="file-input" type="file" multiple />
                <span className="no-images">Nenhuma imagem no momento.</span>
                <div className="images-container"></div>
                {imageURLs.map((imageURL,index) => {
                    <div 
                        key={index}
                        className="image" 
                        style={{backgoundImage: `url(${imageURL})`}}>
                    </div>
                
                })};
            </label>

        </div>

        <button onClick={()=> onCreateMemory()} className="create-memory-btn">Criar memória</button>
        </main>

        <footer className="app-footer">
            <p>Mnemosyne - Ariel Paixão dos Santos</p>
        </footer>

    </>


);
    
};

export default NewMemory;

