import config from "../config"

async function fetchUsers() {
    console.log(process.env.API_TOKEN)
    const opt = {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    }

    return await fetch(`${config.api}/api/users`, opt)
        .then(res => res.json())
}

export default async function Users() {
    const users = await fetchUsers()
    console.log(users)

    return(
        <>
            we
        </>
    )
}