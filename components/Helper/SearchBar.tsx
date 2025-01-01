import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { SearchIcon } from 'lucide-react'

const SearchBar = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={30} cursor={"pointer"}/>
      </DialogTrigger>

      <DialogContent>
        <form >
          <input type="text" placeholder="Search Product..." className='block w-full bg-gray-300 py-2 px-6  rounded-lg mt-4 outline-none' />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
