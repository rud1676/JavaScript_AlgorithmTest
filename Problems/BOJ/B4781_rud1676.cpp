#include<bits/stdc++.h>

using namespace std;

int dp[10001];

int main(){
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);cout.tie(NULL);

  while(1){
    int n,m,k;
    scanf("%d %d.%d",&n,&m,&k);
    if(n==0 && m==0 &&k==0) break;
    memset(dp,0,sizeof(dp));
    int wal = m*100+k;

    for(int i=0;i<n;i++){
      int a,b,c;
      scanf("%d %d.%d",&a,&b,&c);
      
      int cost = b*100+c;

      for(int j=cost;j<=wal;j++){
        dp[j] = max(dp[j],dp[j-cost]+a);
      }
    }
    printf("%d\n",dp[wal]);
  }

  return 0;
}