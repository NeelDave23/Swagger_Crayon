/**
 * @swagger
 * paths:
 *  /cv/basics:
 *     post:
 *       summary: Post CV Basics Request
 *       security:
 *         - bearerAuth: []
 *       description: Post CV Basics Request
 *       tags:
 *         - Private
 *       requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                current_job_title_id:
 *                  type: integer
 *                dream_job_title_id:
 *                  type: integer
 *                industries:
 *                  type: array
 *                  items:
 *                    type: integer
 *                tags:
 *                  type: array
 *                  items:
 *                    type: integer
 *                experience_id:
 *                  type: integer
 *                notice_period_id:
 *                  type: integer
 *                qualification_level:
 *                  type: integer
 *                employment_type:
 *                  type: string
 *                work_setup:
 *                  type: string
 *                salary:
 *                  type: array
 *                  items:
 *                    type: integer
 *                  minItems: 2
 *                  maxItems: 2
 *                tools:
 *                  type: array
 *                  items:
 *                    type: integer
 *                portfolio_link:
 *                  type: string
 *                  format: uri
 *                currency_id:
 *                  type: integer
 
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: string
  
 *      
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statuscode:
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
 *   /cv/worklife:
 *     post:
 *       summary: Post CV WorkLife Request
 *       security:
 *         - bearerAuth: []
 *       description: Post CV WorkLife Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   employer_history_id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   start_date:
 *                     type: string
 *                     format: date-time
 *                   end_date:
 *                     type: string
 *                     format: date-time
 *                   currently_employed_here:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   clients_worked_on_awards:
 *                     type: string
 *                   user_id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                   location:
 *                     type: object
 *                     nullable: true
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         employer_history_id:
 *                           type: integer
 *                         title:
 *                           type: string
 *                         start_date:
 *                           type: string
 *                           format: date-time
 *                         end_date:
 *                           type: string
 *                           format: date-time
 *                         currently_employed_here:
 *                           type: integer
 *                         description:
 *                           type: string
 *                         clients_worked_on_awards:
 *                           type: string
 *                         user_id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                         location:
 *                           type: object
 *                           nullable: true
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *   /cv/reference:
 *     post:
 *       summary: Post CV Reference Request
 *       security:
 *         - bearerAuth: []
 *       description: Post CV Reference Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       reference_id:
 *                         type: integer
 *                         nullable: true
 *                       name:
 *                         type: string
 *                       company_name:
 *                         type: string
 *                       title:
 *                         type: string
 *                       contact:
 *                         type: string
 *                       country_code:
 *                         type: string
 *                       email:
 *                         type: string
 *                         format: email
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
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         reference_id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         company_name:
 *                           type: string
 *                         title:
 *                           type: string
 *                         contact:
 *                           type: string
 *                         country_code:
 *                           type: string
 *                         email:
 *                           type: string
 *                           format: email
 *                         user_id:
 *                           type: integer
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *   /upload/profilepic:
 *     post:
 *       consumes:
 *         - multipart/form-data
 *       security:
 *         - bearerAuth: []
 *       tags:
 *         - Private
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                profile-pic:
 *                 type: string
 
 *                 format: binary
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: string

 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *
 */

/**
 * @swagger
 * paths:
 *   /upload/companylogo:
 *     post:
 *       consumes:
 *         - multipart/form-data
 *       security:
 *         - bearerAuth: []
 *       tags:
 *         - Private
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                company-logo:
 *                 type: string
 *                 format: binary
 *                company_id:
 *                 type: integer 
 *       responses:
 *         200:
 *           description: Successful response
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
 *                   logo:
 *                     type: string 

 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *
 */

/**
 * @swagger
 * paths:
 *   /upload/poollogo:
 *     post:
 *       consumes:
 *         - multipart/form-data
 *       security:
 *         - bearerAuth: []
 *       tags:
 *         - Private
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                pool-logo:
 *                 type: string
 *                 format: binary
 *                pool_id:
 *                 type: integer 
 *       responses:
 *         200:
 *           description: Successful response
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
 

 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *
 */

/**
 * @swagger
 * paths:
 *  /profile/create:
 *    post:
 *       summary: Post Profile create Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Profile create Request
 *       tags:
 *         - Private
 *       requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user_id:
 *                  type: string
 *                relocate:
 *                  type: boolean
 *                contact_no:
 *                  type: integer
 *                dob:
 *                  type: string
 *                  format: date
 *                gender:
 *                  type: string
 *                town_id:
 *                  type: integer
 *                country_id:
 *                  type: integer
 *                email:
 *                  type: string
 *                  format: email
 *                nationality_ids:
 *                  type: array
 *                  items:
 *                    type: integer
 *                language_ids:
 *                  type: array
 *                  items:
 *                    type: integer
 *                skinz:
 *                  type: integer
 *                my_bio:
 *                  type: string
 *                seeking_job:
 *                  type: boolean
 *                reveal_gender:
 *                  type: boolean
 *                own_transport:
 *                  type: boolean
 *                own_equipment:
 *                  type: boolean
 *                internet_access:
 *                  type: boolean
 *                hide_age:
 *                  type: boolean
 *                hide_profile:
 *                  type: boolean
 *                hide_video:
 *                  type: boolean
 *                name:
 *                  type: string
 *                surname:
 *                  type: string
 *                linkedin_profile_link:
 *                  type: string
 *                  format: uri
 
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   data:
 *                     type: object
 *                     properties:
 *                      user_id:
 *                        type: integer
 *                      contact_no:
 *                        type: string
 *                      dob:
 *                        type: string
 *                        format: date-time
 *                      gender:
 *                        type: string
 *                      town_id:
 *                        type: integer
 *                      country_id:
 *                        type: integer
 *                      reveal_gender:
 *                        type: string
 *                      relocate:
 *                        type: string
 *                      seeking_job:
 *                        type: string
 *                      skinz:
 *                        type: integer
 *                      my_bio:
 *                        type: string
 *                      hide_age:
 *                        type: string
 *                      hide_profile:
 *                        type: string
 *                      hide_video:
 *                        type: string
 *                      own_transport:
 *                        type: string
 *                      own_equipment:
 *                        type: string
 *                      internet_access:
 *                        type: string
 *                      linkedin_profile_link:
 *                        type: string
 *                        format: uri
 *                      profile_percent_complete:
 *                        type: integer
 *                      candidate_profile_id:
 *                        type: string
 *                      country_code:
 *                        type: string
 *                      country_name:
 *                        type: string
 *                      nationality_id:
 *                        type: string
 *                      profile_pic:
 *                        type: string
 *                      hide_profile_pic:
 *                        type: string
 *                      language_id:
 *                        type: string
 *                      notes:
 *                        type: string
 *                      work_experience:
 *                        type: string
 *                      study_experience:
 *                        type: string
 *                      test_taken:
 *                        type: string
 *                      created_at:
 *                        type: string
 *                        format: date-time
 *                      updated_at:
 *                        type: string
 *                        format: date-time
  
 *      
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statuscode:
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
 *   /cv/qualification/add:
 *     post:
 *       summary: Post Qualification Add Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Qualification Add Request
 *       tags:
 *         - Private
 *       requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                qualificationdata:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      qualification_id:
 *                        type: integer
 *                      institution_id:
 *                        type: integer
 *                      completed:
 *                        type: string
 *                      qualificationtype_id:
 *                        type: integer
 *                      year_ended:
 *                        type: string
 *                schooldata:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      school_id:
 *                        type: integer
 *                      still_completing_flag:
 *                        type: boolean
 *                      year_completion:
 *                        type: string
 *                      school_name:
 *                        type: string
 *                associationdata:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      association_id:
 *                        type: integer
 *                      still_completing_flag:
 *                        type: boolean
 *                      year_completion:
 *                        type: string
 *                      association_name:
 *                        type: string
 *                study_life_flag:
 *                  type: boolean
 
 *       responses:
 *         200:
 *          description: OK
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  status:
*                    type: string
*                    default: success
*                  data:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        qualification_user_id:
*                          type: integer
*                        qualification_id:
*                          type: integer
*                        institution_id:
*                          type: integer
*                        year_ended:
*                          type: string
*                          format: date-time
*                        completed:
*                          type: string
*                        qualificationtype_id:
*                          type: integer
*                        user_id:
*                          type: integer
*                        created_at:
*                          type: string
*                          format: date-time
*                        updated_at:
*                          type: string
*                          format: date-time
*                        field_of_study:
*                          type: string
*                        grade:
*                          type: string
*                        year_started:
*                          type: string
*                          format: date-time
*                        school_id:
*                          type: integer
*                        association_id:
*                          type: integer
*                        school_completed:
*                          type: string
*                        school_year_end:
*                          type: string
*                          format: date-time
*                        association_completed:
*                          type: string
*                        association_year_end:
*                          type: string
*                          format: date-time
*                  school:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        school_user_id:
*                          type: integer
*                        school_id:
*                          type: integer
*                        still_completing_flag:
*                          type: boolean
*                        year_completion:
*                          type: integer
*                        user_id:
*                          type: integer
*                        created_at:
*                          type: string
*                          format: date-time
*                        updated_at:
*                          type: string
*                          format: date-time
*                  association:
*                    type: array
*                    items:
*                      type: object
*                      properties:
*                        association_user_id:
*                          type: integer
*                        association_id:
*                          type: integer
*                        still_completing_flag:
*                          type: boolean
*                        year_completion:
*                          type: integer
*                        user_id:
*                          type: integer
*                        created_at:
*                          type: string
*                          format: date-time
*                        updated_at:
*                          type: string
*                          format: date-time
  
 *      
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statuscode:
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
 *   /candidate/applywithlogin:
 *     post:
 *       summary: Post Candidate Apply with login Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Candidate Apply with login Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       question_id:
 *                         type: integer
 *                       answer:
 *                         type: string
 *                 job_id:
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
 *                   data:
 *                     type: object
 *                     properties:
 *                       jobs_user_id:
 *                         type: integer
 *                       user_id:
 *                         type: integer
 *                       job_id:
 *                         type: integer
 *                       candidate_status_id:
 *                         type: integer
 *                       candidate_rejected_by_employer:
 *                         type: integer
 *                       job_status_id:
 *                         type: integer
 *                       candidate_job_status_id:
 *                         type: integer
 *                       presented:
 *                         anyOf:
 *                           - type: null
 *                           - type: boolean
 *                       display:
 *                         anyOf:
 *                           - type: null
 *                           - type: boolean
 *                       comment:
 *                         anyOf:
 *                           - type: null
 *                           - type: string
 *                       recording:
 *                         anyOf:
 *                           - type: null
 *                           - type: string
 *                       job_cam_link:
 *                         anyOf:
 *                           - type: null
 *                           - type: string
 *                       shortlisted:
 *                         anyOf:
 *                           - type: null
 *                           - type: boolean
 *                       interviewed:
 *                         anyOf:
 *                           - type: null
 *                           - type: boolean
 *                       viewed:
 *                         anyOf:
 *                           - type: null
 *                           - type: boolean
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                       isUserCvUploaded:
 *                         type: boolean
 *                   questionanswer:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         question_id:
 *                           type: integer
 *                         answer:
 *                           type: string
 *                         user_id:
 *                           type: integer
 *                         jobs_user_id:
 *                           type: integer
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *   /candidate/statuschange:
 *     post:
 *       summary: Post Candidate Status Change Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Candidate Status Change Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 job_id:
 *                   type: integer
 *                 status_id:
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
 *                     jobs_user_id:
 *                       type: integer
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *  /favouritejob:
 *     post:
 *       summary: Post Favourite Job Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Favourite Job Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reqid:
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
 *                     type: integer
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *  /favouritecompany:
 *     post:
 *       summary: Post Favourite Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Favourite Company Request
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
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
 *  /candidate/updateAnswers:
 *     post:
 *       summary: Post Candidate Update Answer Request
 *       security:
 *         - bearerAuth: []
 *       description: Post Candidate Update Answer Request
 *       tags:
 *         - Private
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 question_id:
 *                   type: integer
 *                 answer:
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
 *                     type: array
 *                     items:
 *                       type: integer
 *         400:
 *           description: Bad Request.
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
 *           description: Unauthorized.
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
