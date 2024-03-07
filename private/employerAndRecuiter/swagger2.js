/**
 * @swagger
 * paths:
 *   /employer/changepermission:
 *     post:
 *       summary: Post Change Permission Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Change Permission Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: integer
 *                   description: ID of the User
 *                 employerid:
 *                   type: integer
 *                   description: Employer ID
 *                 new_role_id:
 *                   type: integer
 *                   description: New Role ID
 
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: string
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *   /employer/addnewuser:
 *     post:
 *       summary: Post Add new User Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Add new User Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 first_name:
 *                   type: string
 *                   description: First name of the user
 *                 last_name:
 *                   type: string
 *                   description: Last name of the user
 *                 email:
 *                   type: string
 *                   description: Email address of the user
 *                 country_code:
 *                   type: integer
 *                   description: Country code of the user's phone number
 *                 password:
 *                   type: string
 *                   description: Password for the user's account
 *                 contact:
 *                   type: integer
 *                   description: Contact number of the user
 *                 role_type_id:
 *                   type: integer
 *                   description: Role Type ID
 *                 company_id:
 *                   type: integer
 *                   description: Company ID
 *                 user_id:
 *                   type: integer
 *                   description: ID of the User
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: string
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/deleteusers:
 *     post:
 *       summary: Delete users Request
 *       security:
 *         - bearerAuth: []
 *       description: Delete users Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userids:
 *                   type: array
 *                   items:
 *                      type: integer
 
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: integer
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/deletejobs:
 *     post:
 *       summary: Delete Jobs Request
 *       security:
 *         - bearerAuth: []
 *       description: Delete Jobs Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobids:
 *                   type: array
 *                   items:
 *                      type: integer
 
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: integer
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/edituser:
 *     post:
 *       summary: Post Employer edit user Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Employer edit user Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userid:
 *                   type: integer
 *                 password:
 *                   type: string
 
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: string
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/assignedjob:
 *     post:
 *       summary: Post Assigned Job Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Assigned Job Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userid:
 *                   type: integer
 *                 jobid:
 *                   type: integer
 *                 flag:
 *                   type: boolean
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                          assigned_job_id:
 *                              type: integer
 *                          admin_user_id:
 *                              type: integer
 *                          user_id:
 *                              type: integer
 *                          job_id:
 *                              type: integer
 *                          created_at:
 *                              type: string
 *                              format: date-time
 *                          updated_at:
 *                              type: string
 *                              format: date-time
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/postsecondarycompany:
 *     post:
 *       summary: Post Secondary Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Secondary Company Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 company_name:
 *                   type: string
 *                 hyperlink:
 *                   type: string
 *                   nullable: true
 *                 notes:
 *                   type: string
 *                   nullable: true
 *                 industry_ids:
 *                    type: array
 *                    items:
 *                       type: integer
 *                 logo:
 *                    type: string
 *                    nullable: true   
 *                 company_type:
 *                    type: string
 *                    nullable: true
 *                 company_size:
 *                    type: string
 *                    nullable: true
 *                 contact_person_name:
 *                    type: string
 *                    nullable: true
 *                 contact_person_email:
 *                    type: string
 *                    nullable: true
 *                 contact_person_number:
 *                    type: string
 *                    nullable: true
 *                 country_code:
 *                    type: string 
 *                         
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: boolean
  
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/editsecondarycompany:
 *     post:
 *       summary: Post Edit Secondary Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Edit Secondary Company Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 company_id:
 *                   type: integer 
 *                 company_name:
 *                   type: string
 *                 hyperlink:
 *                   type: string
 *                   nullable: true
 *                 notes:
 *                   type: string
 *                   nullable: true
 *                 industry_ids:
 *                    type: array
 *                    items:
 *                       type: integer  
 *                 company_type:
 *                    type: string
 *                    nullable: true
 *                 company_size:
 *                    type: string
 *                    nullable: true
 *                 contact_person_name:
 *                    type: string
 *                    nullable: true
 *                 contact_person_email:
 *                    type: string
 *                    nullable: true
 *                 contact_person_number:
 *                    type: string
 *                    nullable: true
 *                 country_code:
 *                    type: string 
                          
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: boolean
  
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/companyapproverequest:
 *     post:
 *       summary: Post Company Approver Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Company Approver Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 talentid:
 *                   type: integer 
 *                 company_id:
 *                   type: integer
 
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: array
 *                     items:
 *                       type: integer
  
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/teammemberjob:
 *     get:
 *       summary: Get Employer Team Member Job Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Employer Team Member Job Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: userid
 *           description: User ID
 *           schema:
 *             type: integer
  
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   name:
 *                     type: object
 *                     properties:
 *                       first_name:
 *                          type: string
 *                       last_name:
 *                          type: string
 *                       email:
 *                          type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: integer   
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /employer/getEmaildata:
 *     get:
 *       summary: Get Email Data Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Email Data Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: email
 *           description: Email
 *           schema:
 *             type: string
 *         - in: query
 *           name: role_type_id
 *           description: Email
 *           schema:
 *             type: integer
  
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: object
 *                     properties:
 *                       first_name:
 *                          type: string
 *                       last_name:
 *                          type: string
 *                       user_id:
 *                          type: string
 *                       employer_profile:
 *                          type: object
 *                          properties:
 *                             contact_no:
 *                                type: integer
 *                             country_code: 
 *                                type: integer   
 
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */

/**
 * @swagger
 * paths:
 *  /candidate/shortlistcandidate:
 *     post:
 *       summary: Get Shortlisted Candidate Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Shortlisted Candidate Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 candidate_id:
 *                   type: integer
 *                   description: ID of the Candidate
 *                 job_id:
 *                   type: integer
 *                   description: ID of the job
  
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: success
 *                   data:
 *                     type: boolean
 
 
 *
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: error
 *                   message:
 *                     type: string
 *                     default: Message
 *                   description:
 *                     type: string
 *                     default: Message Description
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     default: 401
 *                   status:
 *                     type: string
 *                     default: invalid token
 *                   message:
 *                     type: string
 *                     default: You are not authorized or member on our website
 *         403:
 *           description: Forbidden
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     default: fail
 *                   message:
 *                     type: string
 *                     default: Forbidden
 *                   role:
 *                     type: integer
 */
