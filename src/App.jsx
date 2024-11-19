import { useEffect, useState } from 'react';
import censysLogo from '/censys-2022.svg';
import './global.css';
import NavBar from './SearchBar';
import { TfiMenuAlt } from 'react-icons/tfi';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoDesktopSharp } from 'react-icons/io5';
import { FaGlobeAsia } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [count, setCount] = useState([]);
  const [time, setTime] = useState('');
  const [results, setResults] = useState('0');
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [url, setUrl] = useState(
    'https://search.censys.io/api/v2/hosts/search'
  );

  const username = '96443a00-88bd-4a89-bde6-3c6eebc8a305';
  const password = 'jTDAeXgkS7sXkqL5pdNxbFwwxU5mY6WT';

  // Would typically use .env variable as below but it gave some problems.
  // const username = import.meta.env.USERNAME;
  // const password = import.meta.env.PASSWORD;

  // Create the authorization header
  const authHeader = 'Basic ' + btoa(username + ':' + password);

  const searchCensys = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: authHeader,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCount(data.result.hits);

        setTime(data.result.duration);

        setResults(
          data.result.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        );

        if (data.result.links.prev !== '') {
          setPrev(`&cursor=${data.result.links.prev}`);
        }
        if (data.result.links.next !== '') {
          setNext(`&cursor=${data.result.links.next}`);
        }
      })
      .catch((error) => {
        console.log('ERROR is', error);
      });
  };

  useEffect(() => {
    searchCensys();
  }, []);

  useEffect(() => {
    if (next !== '') {
      let newUrl = url + next;
      setUrl(newUrl);
    }
  }, [next]);

  useEffect(() => {
    if (prev !== '') {
      let newUrl = url + prev;
      setUrl(newUrl);
    }
  }, [prev]);

  const getNext = () => {
    if (next !== '') {
      let newUrl = url + next;
      setUrl(newUrl);
      searchCensys();
    }
  };

  const getPrev = () => {
    if (prev !== '') {
      let newUrl = url + prev;
      setUrl(newUrl);
      searchCensys();
    }
  };

  return (
    <>
      <NavBar
        value={value}
        setValue={setValue}
        query={query}
        setQuery={setQuery}
        url={url}
        setUrl={setUrl}
        searchCensys={searchCensys}
      />
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid lightgrey',
          height: '65px',
          margin: '0 10% 0 10%',
          color: 'black',
          alignItems: 'end',
          justifyContent: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            borderBottom: '2px solid #4285f4',
            width: '70px',
            alignItems: 'end',
          }}
        >
          <div
            style={{
              display: 'flex',
              margin: '0 0 2px 0',
              padding: '0 0 2px 0px',
              fontSize: '14px',
              color: '#4285f4',
            }}
          >
            <TfiMenuAlt
              style={{
                display: 'flex',
                alignItems: 'end',
                marginTop: '3px',
                padding: '0 5px 0 0',
                width: '13px',
                color: '#4285f4',
                fontFamily: 'Roboto',
              }}
            />
            <b>Results</b>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', margin: '20px 10% 0 10%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '17%',
            margin: '0 0 0 20px',
            color: '#000000',
            fontFamily: 'Roboto',
            borderRight: '1px solid lightgrey',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '10px',
            }}
          ></div>
          <div style={{ marginTop: '10px' }}>
            <b>Host Filters</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Labels:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Autonomous System:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Location:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px' }}>
            <b>Service Filters</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Service Names:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Ports:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Software Vendor:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <b>Software Product:</b>
          </div>
          <div style={{ marginTop: '10px', fontSize: '13px', color: 'grey' }}>
            <i>UNAVAILABLE</i>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            padding: '10px 0 0 20px',
          }}
        >
          <b>Hosts</b>
          <div style={{ display: 'flex', color: 'grey', fontSize: '11px' }}>
            <b>Results: {results}</b>{' '}
            <div style={{ paddingLeft: '10px' }}>
              <b>Time: {time / 1000}s</b>
            </div>
          </div>
          {count.map((item) => {
            return (
              <div
                key={uuidv4()}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20px',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <IoDesktopSharp
                    style={{
                      marginTop: '1px',
                      padding: '0 5px 0 0',
                      fontSize: '20px',
                      color: '#4285f4',
                    }}
                  />
                  <div style={{ color: '#4285f4' }}>
                    <b>{item.ip}</b>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    color: 'grey',
                    fontSize: '14px',
                    padding: '1px 0 0 3px',
                  }}
                >
                  <FaGlobeAsia
                    style={{
                      color: 'grey',
                      marginTop: '3px',
                      padding: '0 8px 0 0',
                    }}
                  />
                  <div>TOTAL PROTOCOLS: {item.services.length}</div>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0 20px 0',
            }}
          >
            <button
              // type='button'
              // disabled={prev === ''}
              onClick={() => getPrev()}
              style={{
                display: 'flex',
                margin: '0 5px 0 5px',
                padding: '10px 18px 0 10px',
                borderRadius: '20px',
                backgroundColor: 'transparent',
                color: 'grey',
              }}
            >
              <div>
                <RiArrowLeftSLine
                  style={{ fontSize: '25px', marginTop: '-3px' }}
                />
              </div>
              <div>PREV</div>
            </button>
            <button
              onClick={() => getNext()}
              type='button'
              disabled={next === ''}
              className='pageBttn'
              style={{
                display: 'flex',
                margin: '0 5px 0 5px',
                padding: '10px 10px 0 18px',
                borderRadius: '20px',
                backgroundColor: 'transparent',
                color: 'grey',
              }}
            >
              <div>NEXT</div>
              <div>
                {' '}
                <RiArrowRightSLine
                  style={{ fontSize: '25px', marginTop: '-3px' }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
