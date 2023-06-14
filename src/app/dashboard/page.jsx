"use client"

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, err, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(fetcher)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard