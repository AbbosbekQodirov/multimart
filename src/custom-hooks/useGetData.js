import React from 'react'
import { useState } from 'react'
import {collection, onSnapshot} from "firebase/firestore"
import {db} from '../firebase.config'
import { useEffect } from 'react'



function useGetData(collectionName) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const collectionRef = collection(db, collectionName)

    useEffect(()=>{
        const getData = async ()=>{

            // firebase firestore realtime data update

             onSnapshot(collectionRef, (snapshot)=>{
                setData(
                  snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
                setLoading(false);
            });
            
        }

        getData()
    }, [])


  return {data, loading}
}

export default useGetData