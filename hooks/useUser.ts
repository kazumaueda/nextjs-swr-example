import useSWR from 'swr'
import axios from 'axios'

const useUser = (id: number) => {
  // To make it easier to recognize if cach is success or not
  const sleep = (msec: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, msec);
    });
  }

  const fetcher = (url: string) =>
    fetch(url).then(async (res) => {
      sleep(5000);
      return res.json();
    });

  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useUser