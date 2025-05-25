"use client"

import { useEffect, useState } from "react"
import { addData, readData } from "@/lib/firebase"

type User = {
  name: string
  email: string
}

export default function UserList() {
  const [users, setUsers] = useState<Array<{ id: string } & User>>([])

  // load users from Firestore
  async function loadUsers() {
    try {
      const all = await readData<User>("users")
      setUsers(all)
    } catch (e) {
      console.error("readData error", e)
    }
  }

  // add a dummy user
  async function handleAdd() {
    try {
      const id = await addData("users", {
        name: "Alice Example",
        email: "alice@example.com"
      })
      console.log("added with id", id)
      await loadUsers()
    } catch (e) {
      console.error("addData error", e)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleAdd}>Add Alice</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
