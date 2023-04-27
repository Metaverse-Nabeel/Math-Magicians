// eslint-disable-next-line import/no-extraneous-dependencies
import { ProgressBar } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [loader, setLoader] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [quotes, setQuotes] = useState({});
  const url = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
  const fetchData = async () => {
    setLoader(true);
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'nMRVJ4zVR4EMNn1c9g+SUQ==a1aZuCMIEnxLwKvD',
        },
      });
      const json = await res.json();
      setQuotes(json);
    } catch (error) {
      setHasError(true);
    }
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loader) return <ProgressBar />;
  if (hasError) return <div className="errorAPI">Sorry! No Quotes right now. Try again later.</div>;
  return (
    <div className="quotesBody">
      <h2 className="quotesCategory">{quotes[0]?.category}</h2>
      <p className="quoteStatement">{`"${quotes[0]?.quote}"`}</p>
      <p className="quoteAuthor">{quotes[0]?.author}</p>
    </div>
  );
};

export default Quote;
