module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const measurements = require('../controllers/measurement.controller');

  /**
   * @swagger
   * /api/measurements:
   *  get:
   *    summary: Get all measurements.
   *    description: Get all measurements by default.
   *    tags: ['measurements']
   *    parameters:
   *      - in: query
   *        name: unit
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter measurements by unit.
   *        example: Senjata
   *    responses:
   *      200:
   *        description: Success get all measurements.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - data
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                data:
   *                  type: array
   *                  items:
   *                    type: object
   *                    required:
   *                      - id
   *                      - name
   *                      - description
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The measurement ID.
   *                        example: 64056dc7c2c95ac1303b4b21
   *                      unit:
   *                        type: string
   *                        description: The measurement's unit
   *                        example: liter
   *                      description:
   *                        type: string
   *                        description: The measurement's description
   *                        example: Ini adalah liter.
  */
  router.get('/api/measurements', measurements.find);

  /**
   * @swagger
   * /api/measurements:
   *  post:
   *    summary: Create a new measurement.
   *    description: Get a new measurement with parameters.
   *    tags: ['measurements']
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            required:
   *              - unit
   *              - description
   *            properties:
   *              unit:
   *                type: string
   *                description: Unit of new measurement.
   *                example: liter
   *              description:
   *                type: string
   *                description: Description of new measurement.
   *                example: Ini adalah liter.
   *    responses:
   *      200:
   *        description: Success add new measurement.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Measurement [liter] successfully added!
  */
  router.post('/api/measurements', measurements.create);

  /**
   * @swagger
   * /api/measurements/{id}:
   *  put:
   *    summary: Update a measurement.
   *    description: Update a measurement by it's ID.
   *    tags: ['measurements']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The measurement ID.
   *        example: 64056dc7c2c95ac1303b4b21
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              unit:
   *                type: string
   *                description: New unit of the measurement.
   *                example: lter
   *              description:
   *                type: string
   *                description: New description of the measurement.
   *                example: Ini adalah liter.
   *    responses:
   *      200:
   *        description: Success update the measurement.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Measurement [liter] successfully updated!
  */
  router.put('/api/measurements/:id', measurements.updateOne);

  /**
   * @swagger
   * /api/measurements/{id}:
   *  delete:
   *    summary: Delete a measurement.
   *    description: Delete a measurement by it's ID.
   *    tags: ['measurements']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The measurement ID.
   *        example: 64056dc7c2c95ac1303b4b21
   *    responses:
   *      200:
   *        description: Success delete the measurement.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Measurment [liter] successfully removed!
  */
  router.delete('/api/measurements/:id', measurements.deleteOne);

  app.use(router);
}