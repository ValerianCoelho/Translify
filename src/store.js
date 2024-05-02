import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export const isLoading = writable(false);

export const outputText = writable("कोंकणी आमची मायभास")
export const inputText = writable("");
export const currentChat = writable("");


// export const chats = writable([]);

function createChats() {
    let ch = JSON.parse(localStorage.getItem("chats")); 
    const { subscribe, set, update } = writable(ch?ch:[]);

	return {
		subscribe,
        createNewChat: (id) =>{
            //call update inside this function
            const now = new Date();
            let newch = {
                id:id,
                date: now.toUTCString(),
                translations:[]
            }
            update((val)=>[newch,...val]);
        },
        addNewTranslation:(input,output,id) =>{
             update((val)=>{
                //returns a reference to the found object
                const chatIndex = val.findIndex((ch) => ch.id === id);

                if (chatIndex !== -1) {
                  // Create a new chat object with the new translation
                  const newChat = {
                    ...val[chatIndex],
                    translations: [{ input, output }, ...val[chatIndex].translations],
                  };
            
                  // Replace the old chat with the new chat in the array
                  val = [...val.slice(0, chatIndex), newChat, ...val.slice(chatIndex + 1)];
                }
                console.log(val)
                return val;
             })
        },
        saveToLocal:()=>{
            update(val=>{
                localStorage.setItem("chats",JSON.stringify(val));
                return val;
            })
        },
		reset: () => set([])
	};
}

export const chats = createChats();

