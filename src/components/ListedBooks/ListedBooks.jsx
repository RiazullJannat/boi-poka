import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadList } from '../../utlities/readList/readList';
import { useEffect, useState } from 'react';
import Book from "../Book/Book";
const ListedBooks = () => {
    const [sort, setSort] = useState('');
    const [readBooks, setReadBooks] = useState([]);
    const allData = useLoaderData();
    useEffect(() => {
        const readList = (getReadList().map(id => parseInt(id)));
        const readBooksData = allData.filter(book => readList.includes(book.bookId));
        setReadBooks(readBooksData);
    }, []);
    const handleSort=(value)=>{
        setSort(value)
        if(value==='Ratings'){
           setReadBooks( [...readBooks].sort((a,b)=> a.rating-b.rating) )
        }
        else if(value==='Page'){
            setReadBooks( [...readBooks].sort((a,b)=> a.totalPages-b.totalPages) )
        }
    }
    return (
        <div>
            <div className='flex justify-center'>
                <details className="dropdown">
                    <summary className="btn m-1">{sort? sort: 'Sort By'}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                        <li onClick={()=>handleSort('Page')}><a>By Page</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read books</Tab>
                    <Tab>Wishlist books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;