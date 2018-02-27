# bracket

A Serverless IoT Server for Fun

**Features**

 - On/Off Toggle
 - JSON support
 - Wechat Control
 - AWS IoT?

On/Off Toggle 
---

Action   |  HTTP Method  |  URL                   | Response
---------|---------------|------------------------|---------------
create   | POST          | /q                     | {"uuid":"HyOPYVfOf"}
on       | GET           | /q/{device_id}/on      | {"results":"succeeded","status":1}
off      | GET           | /q/{device_id}/off     | {"results":"succeeded","status":0}
status   | GET           | /q/{device_id}         | {"status":0}
status   | GET           | /q/{device_id}/status  | {"status":0}

Setup
---

```
npm install -g serverless
```

1.install

```
yarn install
```

2.create domain

```
sls create_domain
```

3.deloy

```
sls deploy
```

## LICENSE

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

© 2018 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.

