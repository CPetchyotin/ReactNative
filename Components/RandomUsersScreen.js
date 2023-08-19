import { Text, View ,FlatList,ActivityIndicator} from 'react-native'
import React, { useEffect, useState} from 'react'
import axios from 'axios'; 

const RandomUsersScreen =  ()=> {
    const [users,setUsers] = useState ([])
    const [loading,setLoading] = useState ([true])

    const fetchUsers = async () => {
      try{
        // const response = await fetch('https://randomuser.me/api/?results=15')
        // const data = await response.json();
        // setUsers(data.results)
        const response = await axios.get('https://randomuser.me/api/?results=15')
        setUsers(response.data.results)
        setLoading(false)
      }catch(error){
        console.error('Error Fetching users naja!',error);
        setLoading(false)
      }
    }
    useEffect(()=>{
      fetchUsers()
    },[])
    
    return (
      <View style ={{flex:1,marginLeft:10,justifyContent:'center'}}>
        {
          loading?(
            <ActivityIndicator size = 'large' color = 'gold'/>
          )          
          :(
            <FlatList
            data = {users}
            renderItem={({item}) =>(
              <View style = {{marginVertical:10}}>
              <Text>{`${item.name.first} ${item.name.last}`}</Text>
              <Text>{item.email}</Text>
              </View>
            )}
            keyExtractor={(index)=> index.toString()}
            />
            )
            }  
        
      </View>
    )
    }
export default RandomUsersScreen