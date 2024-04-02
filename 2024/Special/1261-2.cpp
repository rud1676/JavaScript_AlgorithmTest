
#include <bits/stdc++.h>

using namespace std;

char mp[101][101];

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  int n, m;
  cin >> n >> m;

  for (int i = 0; i < n; i++) {
    string s;
    cin >> s;
    for (int j = 0; j < m; j++) {
      mp[i][j] = s[j];
    }
  }

  for (int i = 0; i < m; i++) {
    bool ck = true;
    for (int j = 0; j < n; j++) {
      if (mp[j][i] == 'O') {
        ck = false;
        break;
      }
    }
    if (ck) {
      cout << i + 1 << '\n';
      return 0;
    }
  }
  cout << "ESCAPE FAILED" << '\n';
  return 0;
}
