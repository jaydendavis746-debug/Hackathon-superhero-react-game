

const API_KEY = import.meta.env.VITE_API_KEY


export const getHero = async(id)=>{

    try {
        const res = await fetch(`https://superheroapi.com/api.php/${API_KEY}/${id}`)
        const hero = await res.json()
        return hero

    } catch(err){
        console.log(err);
    }
}

export const getRandomHero = () =>{
    const id = Math.floor(Math.random()*732) +1
   return getHero(id)
}

export const getTeam = async ()=>{

        const team = []
        for (let i = 0 ; i < 3; i++){
            const hero = await getRandomHero()
            if(hero) {team.push(hero)}
        }
    return team;
}

