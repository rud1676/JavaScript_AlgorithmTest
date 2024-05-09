#include <bits/stdc++.h>

using namespace std;

int dp[100001];

int main() {
  // n, k
  // 10,000
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); cout.tie(NULL);
  int n,m;
  cin >> n >> m;
  dp[0]=1;
  for(int i=0;i<n;i++){
    int temp;
    cin >> temp;
    for(int j=temp;j<=m;j++){
      dp[j]+=dp[j-temp];
    }
  }
  cout << dp[m] << endl;
}
