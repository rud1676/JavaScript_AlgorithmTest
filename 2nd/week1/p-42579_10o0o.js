function solution(genres, plays) {
  const totalCountsMap = {};
  const genreSongMap = {};

  for (let i = 0; i < genres.length; i += 1) {
    if (!totalCountsMap[genres[i]]) {
      totalCountsMap[genres[i]] = plays[i];
      genreSongMap[genres[i]] = [{
        id: i,
        play: plays[i],
      }];
    } else {
      totalCountsMap[genres[i]] += plays[i];
      genreSongMap[genres[i]].push({
        id: i,
        play: plays[i],
      });
    }
  }

  for (const genre in genreSongMap) {
    genreSongMap[genre] = genreSongMap[genre].sort((a, b) => b.play - a.play).slice(0, 2);
  }

  return [...new Set(genres)]
    .sort((a, b) => totalCountsMap[b] - totalCountsMap[a])
    .flatMap((genre) => genreSongMap[genre].map((el) => el.id));
}