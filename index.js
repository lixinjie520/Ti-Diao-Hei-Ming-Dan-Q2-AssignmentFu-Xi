
const players = [
  { name: 'Bernard', email: 'bernard@example.com', ticket: 'XL3558' },
  { name: 'Youchi', email: 'youchi@example.com', ticket: 'AH9188' },
  { name: 'Yenting', email: 'yenting@example.com', ticket: 'LO9903' },
  { name: 'Angela', email: 'angela@example.com', ticket: 'HY7212' },
  { name: 'Yvonne', email: 'yvonne@example.com', ticket: 'CH7684' },
  { name: 'Ellen', email: 'ellen@example.com', ticket: 'BB1750' },
  { name: 'Walter', email: 'walter@example.com', ticket: 'EI5724' },
  { name: 'Tim', email: 'tim@example.com', ticket: 'CK4592' },
  { name: 'Tim', email: 'tim@example.com', ticket: 'CK4592' },
  { name: 'Kevin', email: 'kevin@example.com', ticket: 'TT1804' },
  { name: 'Russell', email: 'russell@example.com', ticket: 'SI0305' },
]
const blackList = [
  { name: 'Walter', email: 'walter@example.com', ticket: 'EI5724' },
  { name: 'Tim', email: 'tim@example.com', ticket: 'CK4592' },
]


//////// 在這裡寫你的答案 /////////
function removeBlacklist(players, blackList) {
  //疑問： 為什麼第一層迴圈是 blackList 而不是 players
  for (let i = 0; i < blackList.length; i++) {
    for (let j = 0; j < players.length; j++) {
      // 比較二者的 email 內容是否相同
      if (blackList[i].email.includes(players[j].email)) {
        players.splice(j, 1)
        j--
      }
    }
  }
  return players;
}


module.exports = {
  removeBlacklist,
}