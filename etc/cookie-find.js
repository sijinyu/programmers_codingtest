function solution(header) {
  let headers = header.split("\n");
  headers = headers.filter((v) => v.includes("Set-Cookie"));
  headers = headers.reduce((acc, v, i) => {
    let [key, value] = v
      .replace(/Set-Cookie:/, "")
      .replace("=", ":")
      .split(":");
    key = key.trim();
    value = value.trim();
    acc[i] = { [key]: value };
    return acc;
  }, []);

  return headers;
}

//httpheader 에서
/*

[{JSESSIONID : 'addshjkfdd; path=/},
 { SSCSID : 'PWwqeqweqd; domain=.toss.im; path=/'}
]   
뽑아내기
*/
