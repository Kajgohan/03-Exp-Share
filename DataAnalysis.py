#%%
import pandas as pd 
import regex as re
#%%
responseData = pd.read_json('responseData.json')
responseData.head()

#transpose old frame
responseData = responseData.transpose()
responseData.head()

#%%
responseData.to_csv('out')
# %%
def getTime(timeCol):
    cleanTime=''
    try:
        cleanTime = re.search('@"^\d{10}$"',timeCol)
    except Exception as e:
        print('ERROR', e)
    
    return cleanTime

responseData['cleanTime'] = responseData.apply(getTime(responseData['time']))

# %%
print(responseData['user'].value_counts())

# %%
