#include<bits/stdc++.h>
using namespace std ;

void bubblesort(vector<int> &arr)
{
    int n=arr.size();
    for(int i=0;i<n-1;i++)
    {
        bool swapped=false;
        for(int j=0;j<n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr[j],arr[j+1]);
                swapped=true;
            }
        }

        if(!swapped)
        {
            break ;
        }
    }
}

int main()
{
    vector<int> arr1={7,6,4,3};
    vector<int> arr2={4,0,6,4,5};

    cout<<"The orignal values of arr1"<<endl;
    for(int val:arr1) cout<<val<<" "<<endl;
    cout<<"The orignal values of arr2"<<endl;
    for(int val:arr2) cout<<val<<" "<<endl;

     bubblesort(arr1);
     bubblesort(arr2);
    
    cout<<"The sorted values of arr1"<<endl;
    for(int val:arr1) cout<<val<<" "<<endl;
    cout<<"The sorted values of arr2"<<endl;
    for(int val:arr2) cout<<val<<" "<<endl;


    // vector<int> merged= arr1;
    // merged.insert(merged.end(),arr2.begin(),arr2.end());

    vector<int> merged(arr1.size()+arr2.size());
     int index=0;
     for(int i=0;i<arr1.size();i++)
     {
        merged[index]=arr1[i];
        index++;
     }

     for(int i=0;i<arr2.size();i++)
     {
        merged[index]=arr2[i];
        index++;
     }
    

    bubblesort(merged);
    
    cout<<"The merged values of arr:";
    for(int val:merged) cout<<val<<" ";
    

    
}