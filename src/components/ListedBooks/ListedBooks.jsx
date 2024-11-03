import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadList } from '../../utlities/readList/readList';
import { useEffect, useState } from 'react';
import Book from "../Book/Book";
const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const allData = useLoaderData();
    useEffect(() => {
        const readList =(getReadList().map(id=> parseInt(id)));
        const readBooksData = allData.filter(book => readList.includes(book.bookId));
        setReadBooks(readBooksData);
    }, []);
    return (
        <div>
            <h1 className="2xl">Listed books.</h1>
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