import { useEffect, useState } from 'react';

import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList(prev => [...prev, ...list]);
    } catch (er) {
      console.log('ERROR: ', er);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
    fetchNextPage,
  };
}
