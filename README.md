# :card_index_dividers: NodeJS Typescript Project

![alt](docs/img/img.png)

## :gear: Requerimientos

* node v18

## :tada: Uso

```bash
npm install

npm run start
```

## :tada: Debug con vscode

1. Crear un arhivo **.vscode/launch.json** y agregar lo siguiente

    ```json
    {
    "version": "0.2.0",
    "configurations": [
        {
        "name": "Attach by Process ID",
        "port": 4321,
        "request": "attach",
        "skipFiles": [
            "<node_internals>/**"
        ],
        "type": "node"
        }
    ]
    }
    ```

2. Ejecutar

    ```bash
    npm run dev
    ```

3. Ejecutar el debugger de vscode para que se attache al server

---

## :grin: Autor

> **Brian Lobo**

* Github: [brianwolf](https://github.com/brianwolf)
* Docker Hub:  [brianwolf94](https://hub.docker.com/u/brianwolf94)
