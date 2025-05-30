/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*
*/

const express = require("express");
const router = express.Router();

/**
 * Health check route
 * @route GET /healthcheck
 * @returns {Object} 200 - Health status
 */
router.get("/healthcheck", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
  /**
   * Make sure to hit pyroscope, prometheus and aggregators to check this
   */
});

module.exports = router;
