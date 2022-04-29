import fetch from 'node-fetch'

const POHValidator = {
    isRegistered: async address => {
        const res = await fetch(`https://api.poh.dev/profiles/${ address }`)
        const data = await res.json()
    
        return data.registered
    },
    getUserData: async address => {
        const res1 = await fetch(`https://api.poh.dev/profiles/${ address }`)
        const data1 = await res1.json()
        const res2 = await fetch(`https://api.poh.dev/profiles/${ address }/vouches`)
        const data2 = await res2.json()
        const generalData = {
            generalData: data1,
            vouches: data2
        }

        return generalData 
    }
}

module.exports = POHValidator