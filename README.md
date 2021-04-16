# Pokemon battle solver

Software created based on test instructions for the DTI Digital Company.

This program solves the battles between two pokemon, according to some input data.

To run the program, just create a .txt file with the input data as below

```
Pikachu 81
35 7 22850
55 8 23140
30 13 17280
90 5 24795
Bulbasaur 50
45 9 20000
49 12 40000
49 3 60000
45 8 10000
```

In case there are any questions, please refer to the example file present in src/services/input/example.txt

After the file is set, just run src/index.js from the root directory. For instance, if you wish to use the file mentioned above you'd run the following command

```
node src/index.js src/services/input/example.txt
```

After that the result will be shown in the console, with all calculations and output method defined according to the intructions given by DTI.

To simply run the program, it's not needed to install anything other than node in the machine. But, in order to develop the project further, some depencies must be installed by the following command

```
yarn install
```
ran from the root directory.

In this case, you can run the tests through the following command

```
yarn test
```
