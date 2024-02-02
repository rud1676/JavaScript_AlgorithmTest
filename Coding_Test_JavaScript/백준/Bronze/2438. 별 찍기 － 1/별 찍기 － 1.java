import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());


        for(int i=1 ; i<=T;i++){
            for(int j=1;j<=i;j++){
                bw.write("*");
            }
            bw.write("\n");
        }

        br.close();
        bw.close();
    }
}