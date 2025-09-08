import Header from './components/Header/Header.jsx'
import './App.css';
import List from './components/ListOfCards/List.jsx'
import AddCardButton from './components/Buttons/AddCardButton/AddCard'
import React from 'react'
import { useState, useEffect } from 'react'
import Head from './components/Head/Head.jsx';
// import pic from './pictures/124.jpg';
// 
const basicCards= [
         {
      "id": 10,
      "title": "אני אלוף העולם 💪 ",
      "tasks": [
                 {
          "id": 11,
          "completed": false,
          "text": "אני אלוף העולם..  בלאהוב קודם את עצמי"
        },
        {
          "id": 12,
          "completed": false,
          "text": "את - משדרת - עסקים - כרגיל !!"
        },
                    {
          "id": 13,
          "completed": false,
          "text": "אבל תיכף ייגמר לנו הפתיל"
        },
                    {
          "id": 14,
          "completed": false,
          "text": "אני אלוף העולם בליפול אבל -  לקום כמו ג-ד-ו-ל , אלוף העולם ב-לנסות לפחות.. "
        },
        {
          "id":15,
          "completed": false,
          "text": "אני בוחר בכל יום לחיות !! 💕"
        }
      ]
    },
      {
      "id": 270630,
      "title": "🔥🔥React🔥🔥",
      "tasks": [
        {
          "id": 458,
          "completed": false,
          "text": "fireBase 🔥 "
        },
        {
          "id": 8028,
          "completed": false,
          "text": "logIn app - make an application just for logIn logOut & register"
        }
      ]
    },
      {
      "id": 84630,
      "title": "Kubernates :",
      "tasks": [
        {
          "id": 3249,
          "completed": false,
          "text": "https://kubernetes.io/docs/tutorials/"
        },
        {
          "id": 8260,
          "completed": false,
          "text": "https://cloud.google.com/kubernetes-engine"
        }
      ]
    },
      
      {
      "id": 299630,
      "title": "Reham 💪 ",
      "tasks": [
                 {
          "id": 4101,
          "completed": false,
          "text": "She's one of few artists nowadays"
        },
        {
          "id": 418,
          "completed": false,
          "text": "whose songs don't song all the same."
        },
                    {
          "id": 443518,
          "completed": false,
          "text": "Her voice has so much range and can make you feel so many emotions "
        },
                    {
          "id": 41992,
          "completed": false,
          "text": "I felt empowered "
        },
        {
          "id": 8018,
          "completed": false,
          "text": "💕💕💕💕💕"
        }
      ]
    },
       {
      "id": 8899630,
      "title": " 😍כמו ש.מ.ש לעולם",
      "tasks": [
        {
          "id": 411238,
          "completed": false,
          "text": "אהיה כמו ציפור נודדת במרחב "
        },
        {
          "id": 8022218,
          "completed": false,
          "text": "אתה תהיה לי מלך - לעולם"
        },
        {
          "id": 12223363,
          "completed": false,
          "text": "אהיה כמו ציפור נודדת "
        },
         {
          "id": 666363,
          "completed": false,
          "text": " ח.ו.פ.ש.י.ה"
        }
      ]
    },
             {
      "id": 855555630,
      "title": "love",
      "tasks": [
        {
          "id": 21238,
          "completed": false,
          "text": "building"
        },
        {
          "id": 1111118,
          "completed": false,
          "text": "an "
        },
        {
          "id": 1243163,
          "completed": false,
          "text": "EmPire"
        },
         {
          "id": 468363,
          "completed": false,
          "text": "^^"
        }
      ]
    },
             {
      "id": 8000030,
      "title": "yes",
      "tasks": [
        {
          "id": 4999938,
          "completed": false,
          "text": "لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه."
        },
         {
          "id": 4222238,
          "completed": false,
          "text": "دائما خذ في عين الإعتبيار أن قرار النجاح هو أهم من أي شيئ آخر."
        },
            {
          "id": 118,
          "completed": false,
          "text": "مهما تصور أو صدق عقل الإنسان, فإنه قادر على تحقيقه."
        }
      ]
    },
            {
      "id": 805550,
      "title": " الشاطئ",
      "tasks": [
        {
          "id": 4994448,
          "completed": false,
          "text": "لن تكون قادراً على قطع المحيط إذا لم يكن لديك الشجاعة أن تخسر مرآى الشاطئ."
        }
      ]
    }
  ];
  //-------------------------------------------------------------
  function App() {
  const [cards, setCards] = useState([])
  //---------------------------------------------------------------------------------------------------
  const getCards = async (newCards) => {
     try{
      let cardsFromServer = await fetchCards();
       console.log("cards from server = ", cardsFromServer);
       setCards(cardsFromServer);
      }catch(e){ 
            console.log('can not fetch data from server, catch the error ^*^ , error =',e);
//              let check = localStorage.getItem("cards"); 
                let check = localStorage.getItem("myCards");
             let temp = JSON.parse(check);
              if ((temp !== null) && ( temp.length > 0) && ( temp !== [])) {
                        setCards(temp);
                        console.log("got local storage , cards = ", cards)
                    }
                  else {            
                console.log(" storage is not okay so I put newCards");
                  setCards(newCards);
                  localStorage.setItem("myCards", JSON.stringify(newCards));
                  }
      }
       finally{
        console.log('I am in finally');
        
      }
    }
//--------------------------------------------------------------------------

useEffect(()=>{
//    localStorage.setItem("cards", JSON.stringify(cards));
  localStorage.setItem("myCards", JSON.stringify(cards));
 console.log('cards changed now!,storage = ', localStorage.getItem("cards"));
},[cards])
//-------------------------------------------------------------
  useEffect(() => {
    getCards(basicCards)
  }, [])
  //------------------------------------------------------------------------------------------------------
  // Fetch Tasks
  const fetchCards = async () => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json();
    if (res.status < 300 && res.status >= 200) {
      setCards(data);
      console.log("success to fetch data from server")
      return data
    }
    else {
      console.log(" failed to load data from server");
      }

  }
  //---------------------------------------------------------------------
  const deleteCard = async (id) => {
    let temp = cards.filter(c => c.id !== id);
    try{
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    });
    let data = await res.json();
    if (res.status < 300 && res.status >= 200) {
      // await getCards();
    }}
    catch(e){
          console.log("catched error , failed to remove card from server, gonna remove it locally ,error= ",e)
// setCards(newCards);
           }
           finally{
      let newCards = cards.filter( c => c.id !== id );
     await setCards(newCards);
    await getCards(newCards);
              localStorage.setItem("myCards", JSON.stringify(newCards));
    // setCards(newCards);
    //  localStorage.setItem('cards', newCards);
           }
  }
  //---------------------------------------------------------------------------------------------------
 const addTask = async (id, text) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks;
    let newTask = {
      id: Math.floor(Math.random() * 20000) + 1,
      completed: false,
      text: text
    }
    updatedTasks = [...updatedTasks, newTask];
    const updatedCard = { id: id, title: card.title, tasks: updatedTasks }
    // let ourCards = cards.map(c => c.id === id ? updatedCard : c);
    try{
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
  }catch(e){
    console.log('catched erroe , failed to save to Backend , saved locally, error :',e)
  }finally{
      let newCards = cards.map(c => c.id ===id? updatedCard:c)
      await setCards(newCards);
       await getCards(newCards);
             localStorage.setItem("myCards", JSON.stringify(newCards));
        // localStorage.setItem('cards', newCards);
  }
}
  //-----------------------------------------------------------------------------------------------
  const addNewCard = async (title) => {
    let newId = Math.floor(Math.random() * 17890) * 31;
    let newCard = { id: newId, title: title, tasks: [] }
    // cards.push(newCard);
    let newCards = [...cards];
           newCards.unshift(newCard);   //--- reham 15-03-2023
//     newCards.push(newCard);
    try{
    const res = await fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
    const data = await res.json()
  }catch(e){
//  alert('catched error , fail to add new card, error: ',e);
   }finally{
         await setCards(newCards);
     await getCards(newCards);
             localStorage.setItem("myCards", JSON.stringify(newCards));
      // localStorage.setItem('cards', newCards);
   }
  }
  //-------------------------------------------------------------------------------------------------
  const toggleTask = async (id, id_task) => {
    // let card = cards.filter(c => c.id === id);
    // card = card[0];
    // console.log("in toggle , card name = ", card.title);
    // let task = card.tasks.filter(t => t.id === id_task);
    // task = task[0];
    // console.log("in toggle , task id = ", task.id, " - completed = ", task.completed);
    // task.completed = !task.completed;

    // let updatedTasks = card.tasks.map(t => t.id === id_task ? task : t);

    // let updatedCard = {
    //   id: id,
    //   title: card.title,
    //   tasks: updatedTasks
    // }

    // console.log("task.id = ", task.id, " , changed to completed =", task.completed);

    // const res = await fetch(`http://localhost:5000/cards/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedCard),
    // })
    // const data = await res.json()
    // if (res.status < 300 && res.status >= 200) {
    //   await fetchCards();
    // }
    // else { alert('Error change completed for task :', task.id); }
  }
  //========================================================================
  // Delete Task
  const deleteTask = async (id, id_task) => {
     let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks.filter(t => t.id !== id_task);

    let updatedCard = {
      id: id,
      title: card.title,
      tasks: updatedTasks
    }
    try{
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json();
     console.log("Success to delete the task from server!! ");
  }catch(e){
     console.log('catched error , failed to delete task from server , error = ',e);
    }
   finally{
    let newCards = cards.map(c => c.id === id ? updatedCard:c )
    await setCards(newCards);
     await getCards(newCards);
             localStorage.setItem("myCards", JSON.stringify(newCards));
      // localStorage.setItem('cards', newCards);
   }
 }
  //-------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
   {/*  <img
        src={a}
        // src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI5?ver=bfb7'
        // 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wpph?ver=ccbe'
        style={{
          zIndex: "-1",
          position: 'fixed',
          // transform: 'scale(1.216)',
          marginRight: '0%',
          // left: '0%',
          // right: '0%',
          paddingRight: '0%',
          top: '0%',
          buttom: '0%',
          opacity:'50%',
        }}
      />
      */} 
      {/* <img
        src={pic}
        // src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI5?ver=bfb7'
        // 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wpph?ver=ccbe'
        style={{
          zIndex: "-1",
          position: 'fixed',
          transform: 'scale(1.216)',
          marginRight: '0%',
          left: '0%',
          right: '0%',
          paddingRight: '0%',
          top: '0%',
          buttom: '0%',
          // opacity:'95%',
        }}
      /> */}
      {/* <video autoplay={true} controls loop play
        // src={hh}
        src='https://rod-streaming-video-msn-com.akamaized.net/e908e91f-370f-49ad-b4ce-775b7e7a05b4/a6287f74-46f0-42f9-b5d9-997f00585696.mp4'
        style={{
          zIndex: "-1",
          position: 'fixed',
          right: '0%',
          left:'0%',
          top:'0%',
          buttom:'0%',
                }} /> */}
      {/* <SignInButton /> */}
    
       <Head />
      <Header /> 
     

      <AddCardButton addNewCard={addNewCard} />

      {cards.length <= 0 ? 
      <h1 style ={{
       fontFamily: 'Papyrus',
       align:'center',
       marginTop:'150px',
       fontSize:'40',
         width:'1000px',
       }}>Add some cards</h1> :
        <List
          cards={cards}
          deleteCard={deleteCard}
          deleteTaskServer={deleteTask}
          toggleTaskServer={toggleTask}
          addTaskServer={addTask} />}
    </div>
  );
}

export default App;
