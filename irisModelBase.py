# 2025.3.10
# 프로젝트 2 붓꽃분류기 만들기
# 이용희 교수님 수업
import joblib
import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier


iris_df = pd.read_csv('iris.csv')

y = iris_df['species']
x = iris_df.drop('species',axis=1)

kn = KNeighborsClassifier()
rfc = RandomForestClassifier()
model_kn = kn.fit(x, y)
model_rfc = rfc.fit(x, y)

joblib.dump(model_rfc, 'model.rfc.pkl')


# x_new = np.array([[3,3,3,3]])
# kn ['versicolor'] [[0. 0.8 0.2]]
x_new = np.array([[5.0,3.4,1.4,0.2]])
# kn ['setosa'] #[[1.0.0]]

# x_new = np.array([[1,4.2,1.4,7]])
# kn ['versicolor'] [[0.2 0.6 0.2]]

model_rfc =joblib.load('model.rfc.pkl')


# prediction = model_kn.predict(x_new)
prediction = model_rfc.predict(x_new)
print(prediction)
# probability = model_kn.predict_proba(x_new)
probability = model_rfc.predict_proba(x_new)
print(probability)
