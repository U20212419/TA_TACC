# Instalación de la librería necesaria
import subprocess
subprocess.check_call(["pip", "install", "pandas"])


import pandas as pd
import glob

# Leer las partes del corpus
files = glob.glob('corpus_*.csv')

dataframes = []

for file in files:
    # Se leen las partes del corpus en codificación latin-1
    df = pd.read_csv(file, encoding='latin-1')
    dataframes.append(df)

# Concatenar las partes del corpus
corpus = pd.concat(dataframes, ignore_index=True)

# Codificar el contenido a latin-1 para conservar los caracteres como 'ñ'
# Se guardó el contenido de las partes del corpus en latin-1, así que ya no es necesaria la conversión
#corpus = corpus.map(lambda x: x.encode('latin-1', 'ignore').decode('latin-1') if isinstance(x, str) else x)

# Guardar el corpus completo
corpus.to_csv('corpus.csv', index=False, encoding='latin-1')
