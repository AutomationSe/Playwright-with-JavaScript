import {test,expect} from '@playwright/test';
import fs  from 'fs';

const testdatapath = 'Data/data.json'

const testData = JSON.parse(fs.readFileSync(testdatapath, 'utf8'));