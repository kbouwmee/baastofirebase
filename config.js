/*
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */

var config = {};

config.baas = {};
// BaaS protocol http or https
config.baas.prot = "https://";
// BaaS host
config.baas.host = "apibaas-trial.apigee.net";
// BaaS org name to copy from
config.baas.org = 'rbidemo';
// BaaS app name to copy from
config.baas.app = 'rbidemoapp';
// BaaS org client_id
config.baas.client_id = 'b3U6FIjfBuPHEea1pBIuBzeXfQ';
// BaaS org secret
config.baas.secret = 'b3U61tvo7s4Dt6-j0n3l3k6M-lxugR0';
// filter attributes list:  these attributes will NOT be migrated
config.baas.filterAttributes = ['uuid', 'type', 'metadata'];

config.firestore = {};
// Firestore DB name
config.firestore.db = 'anwb-5e12e';

 module.exports = config;
