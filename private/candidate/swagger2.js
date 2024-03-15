/**
 * @swagger
 * /cv/get:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get CV Details Request
 *     description: Get CV Details Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     basic:
 *                       type: object
 *                       properties:
 *                         candidate_info_id:
 *                           type: null
 *                         user_id:
 *                           type: integer
 *                         school_id:
 *                           type: null
 *                         year_passed:
 *                           type: null
 *                         qualification_level:
 *                           type: integer
 *                         salary_id:
 *                           type: integer
 *                         experience_id:
 *                           type: integer
 *                         notice_period_id:
 *                           type: integer
 *                         employment_type:
 *                           type: string
 *                           example: permanent
 *                         work_setup:
 *                           type: string
 *                           example: remote
 *                         rate_id:
 *                           type: null
 *                         highest_qualification_id:
 *                           type: integer
 *                         currency_id:
 *                           type: integer
 *                         current_job_title_id:
 *                           type: integer
 *                         dream_job_title_id:
 *                           type: integer
 *                         industry_id:
 *                           type: array
 *                           items:
 *                             type: integer
 *                         primary_personality_id:
 *                           type: null
 *                         secondary_personality_id:
 *                           type: null
 *                         grit_score:
 *                           type: null
 *                         portfolio:
 *                           type: null
 *                         portfolio_link:
 *                           type: string
 *                         cv_link:
 *                           type: string
 *                         cam_link:
 *                           type: null
 *                         cv_basic_completed:
 *                           type: boolean
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                         salary:
 *                           type: array
 *                           items:
 *                             type: integer
 *                         tags:
 *                           type: array
 *                           items:
 *                             type: integer
 *                     work:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           company_name:
 *                             type: string
 *                           title:
 *                             type: string
 *                           start_date:
 *                             type: string
 *                           end_date:
 *                             type: string
 *                           currently_employed_here:
 *                             type: integer
 *                           description:
 *                             type: null
 *                           clients_worked_on_awards:
 *                             type: string
 *                     study:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           qualification_id:
 *                             type: integer
 *                           institution_id:
 *                             type: integer
 *                           qualificationtype_id:
 *                             type: integer
 *                           year_ended:
 *                             type: string
 *                             format: date-time
 *                           completed:
 *                             type: string
 *                           school_id:
 *                             type: null
 *                           association_id:
 *                             type: null
 *                           school_completed:
 *                             type: null
 *                           association_completed:
 *                             type: null
 *                           school_year_end:
 *                             type: null
 *                           association_year_end:
 *                             type: null
 *                 counterData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       TotalUserCount:
 *                         type: string
 *                       totalusershorlisted:
 *                         type: string
 *                       totaluserinterviewed:
 *                         type: string
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 data:
 *                   type: string
 *                   default: Please Complete your Cv details
 
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /cv/getbasics:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get CV Basics Request
 *     description: Get CV Basics Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     candidate_info_id:
 *                       type: null
 *                     user_id:
 *                       type: integer
 *                     school_id:
 *                       type: null
 *                     year_passed:
 *                       type: null
 *                     qualification_level:
 *                       type: integer
 *                     salary_id:
 *                       type: integer
 *                     experience_id:
 *                       type: integer
 *                     notice_period_id:
 *                       type: integer
 *                     employment_type:
 *                       type: string
 *                     work_setup:
 *                       type: string
 *                     rate_id:
 *                       type: null
 *                     highest_qualification_id:
 *                       type: integer
 *                     currency_id:
 *                       type: integer
 *                     current_job_title_id:
 *                       type: integer
 *                     dream_job_title_id:
 *                       type: integer
 *                     industry_id:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           industry_id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                     primary_personality_id:
 *                       type: null
 *                     secondary_personality_id:
 *                       type: null
 *                     grit_score:
 *                       type: null
 *                     portfolio:
 *                       type: null
 *                     portfolio_link:
 *                       type: string
 *                     cv_link:
 *                       type: string
 *                     cam_link:
 *                       type: null
 *                     cv_basic_completed:
 *                       type: boolean
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                     currentTitle:
 *                       type: string
 *                     dreamTitle:
 *                       type: string
 *                     salary:
 *                       type: array
 *                       items:
 *                         type: integer
 *                     tags:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           tag_id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                     tools:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           tool_id:
 *                             type: string
 *                           name:
 *                             type: string
 *                     work_life_completed:
 *                       type: boolean
 *                     study_life_completed:
 *                       type: boolean
 *                     user_reference_completed:
 *                       type: boolean
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /cv/getworklife:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get CV Worklife Request
 *     description: Get CV Worklife Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company_name:
 *                         type: string
 *                       title:
 *                         type: string
 *                       start_date:
 *                         type: string
 *                         format: date-time
 *                       end_date:
 *                         type: string
 *                         format: date-time
 *                       currently_employed_here:
 *                         type: integer
 *                       clients_worked_on_awards:
 *                         type: string
 *                       company_id:
 *                         type: null
 *                       title_id:
 *                         type: string
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /cv/getreference:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get CV Reference Request
 *     description: Get CV Reference Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       reference_id:
 *                         type: integer
 *                       user_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       company_name:
 *                         type: string
 *                       title:
 *                         type: string
 *                       contact:
 *                         type: string
 *                       email:
 *                         type: string
 *                       country_code:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                       company_id:
 *                         type: integer
 *                       title_id:
 *                         type: integer
 *                 cv_basic_completed:
 *                   type: boolean
 *                 work_life_completed:
 *                   type: boolean
 *                 study_life_completed:
 *                   type: boolean
 *                 user_reference_completed:
 *                   type: boolean
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /cv/getstudylife:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get CV Studylife Request
 *     description: Get CV Studylife Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 qualificationdata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       qualification_id:
 *                         type: integer
 *                       institution_id:
 *                         type: integer
 *                       completed:
 *                         type: string
 *                       qualificationtype_id:
 *                         type: integer
 *                       year_ended:
 *                         type: string
 *                         format: date-time
 *                       qualification_name:
 *                         type: string
 *                       institution_name:
 *                         type: string
 *                 schooldata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       school_id:
 *                         type: integer
 *                       still_completing_flag:
 *                         type: null
 *                       year_completion:
 *                         type: integer
 *                       school_name:
 *                         type: string
 *                 associationdata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       association_id:
 *                         type: integer
 *                       still_completing_flag:
 *                         type: null
 *                       year_completion:
 *                         type: integer
 *                       association_name:
 *                         type: string
 *                 study_experience:
 *                   type: null
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /profile/get:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Profile  Request
 *     description: Get Profile  Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     basic:
 *                       type: object
 *                       properties:
 *                         candidate_info_id:
 *                           type: null
 *                         user_id:
 *                           type: integer
 *                         school_id:
 *                           type: null
 *                         year_passed:
 *                           type: null
 *                         qualification_level:
 *                           type: integer
 *                         salary_id:
 *                           type: integer
 *                         experience_id:
 *                           type: integer
 *                         notice_period_id:
 *                           type: integer
 *                         employment_type:
 *                           type: string
 *                           example: permanent
 *                         work_setup:
 *                           type: string
 *                           example: remote
 *                         rate_id:
 *                           type: null
 *                         highest_qualification_id:
 *                           type: integer
 *                         currency_id:
 *                           type: integer
 *                         current_job_title_id:
 *                           type: integer
 *                         dream_job_title_id:
 *                           type: integer
 *                         industry_id:
 *                           type: array
 *                           items:
 *                             type: integer
 *                         primary_personality_id:
 *                           type: null
 *                         secondary_personality_id:
 *                           type: null
 *                         grit_score:
 *                           type: null
 *                         portfolio:
 *                           type: null
 *                         portfolio_link:
 *                           type: string
 *                         cv_link:
 *                           type: string
 *                         cam_link:
 *                           type: null
 *                         cv_basic_completed:
 *                           type: boolean
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                         salary:
 *                           type: array
 *                           items:
 *                             type: integer
 *                         tags:
 *                           type: array
 *                           items:
 *                             type: integer
 *                     work:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           company_name:
 *                             type: string
 *                           title:
 *                             type: string
 *                           start_date:
 *                             type: string
 *                           end_date:
 *                             type: string
 *                           currently_employed_here:
 *                             type: integer
 *                           description:
 *                             type: null
 *                           clients_worked_on_awards:
 *                             type: string
 *                     study:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           qualification_id:
 *                             type: integer
 *                           institution_id:
 *                             type: integer
 *                           qualificationtype_id:
 *                             type: integer
 *                           year_ended:
 *                             type: string
 *                             format: date-time
 *                           completed:
 *                             type: string
 *                           school_id:
 *                             type: null
 *                           association_id:
 *                             type: null
 *                           school_completed:
 *                             type: null
 *                           association_completed:
 *                             type: null
 *                           school_year_end:
 *                             type: null
 *                           association_year_end:
 *                             type: null
 *                 counterData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       TotalUserCount:
 *                         type: string
 *                       totalusershorlisted:
 *                         type: string
 *                       totaluserinterviewed:
 *                         type: string
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * /languages:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Languages Request
 *     description: Get Languages Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       language:
 *                         type: string
 *                       language_id:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *       '400':
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 *       '401':
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statuscode:
 *                   type: integer
 *                   default: 401
 *                 status:
 *                   type: string
 *                   default: invalid token
 *                 message:
 *                   type: string
 *                   default: You are not authorized or member on our website
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 */

/**
 * @swagger
 * paths:
 *   /nationalities:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get Nationalities Request
 *       description: Get Nationalities Request
 *       tags:
 *         - Private
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: success
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         nationality_id:
 *                           type: integer
 *                           example: 1
 *                         nationality:
 *                           type: string
  
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *         '400':
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
 *         '401':
 *           description: Unauthorized
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
 *         '403':
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
 *   /job/traits:
 *     get:
 *       summary: Get Job Traits Request
 *       security:
 *        - bearerAuth: []
 *       description: Get Job Traits Request
 *       tags:
 *         - Private
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
 *                     example: success
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         trait_id:
 *                           type: integer
 
 *                         name:
 *                           type: string
 
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
 *   /profile/status:
 *     get:
 *       summary: Get Profile Status Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Profile Status Request
 *       tags:
 *         - Private
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
 *                     example: success
 *                   data:
 *                     type: object
 *                     properties:
 *                         profile_percent_complete:
 *                           type: integer
 
 
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
 *   /cv/status:
 *     get:
 *       summary: Get CV Status Request
 *       security:
 *         - bearerAuth: []
 *       description: Get CV Status Request
 *       tags:
 *         - Private
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
 *                     example: success
 *                   data:
 *                     type: object
 *                     properties:
 *                         cv_basic_completed:
 *                           type: integer
 
 
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
 *  /job/getAllStatus:
 *     get:
 *       summary: Get All Job Status Request
 *       security:
 *         - bearerAuth: []
 *       description: Get All Job Status Request
 *       tags:
 *         - Private
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
 *                     example: success
 *                   data:
 *                     type: array
 *                     items:
 *                      types: object
 *                      properties:
 *                         job_status_id:
 *                           type: integer
 *                         name: 
 *                           type: string 
 
 
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
 *   /candidate/job:
 *     get:
 *       summary: Get Candidates Job Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Candidates JobRequest
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: jobstage
 *           description: Job Stage
 *           schema:
 *             type: string
 *         - in: query
 *           name: mystage
 *           description: My Stage
 *           schema:
 *             type: string
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           required: true
 *           schema:
 *             type: integer
 *         - in: query
 *           name: jobstatus_id
 *           description: Job Status ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: salary
 *           description: Salary
 *           schema:
 *             type: integer
 *         - in: query
 *           name: experience
 *           description: Experience
 *           schema:
 *             type: integer
 *         - in: query
 *           name: highest_qualification_id
 *           description: Highest Qualification ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: currency_id
 *           description: Currency ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: company_id
 *           description: Company ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: tool_id
 *           description: Tool ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: town_id
 *           description: Town ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: tag_id
 *           description: Tag ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: region_id
 *           description: Region ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: candidatestatus_id
 *           description: Candidate Status ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: lastKey
 *           description: Last Key
 *           schema:
 *             type: string
 *         - in: query
 *           name: job_title
 *           description: Job Title
 *           schema:
 *             type: string
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
 *                         user_id:
 *                           type: integer
 *                         job_id:
 *                           type: integer
 *                         candidate_job_status_id:
 *                           type: integer
 *                         job_cam_link:
 *                           type: string
 *                         job_status_id:
 *                           type: integer
 *                         JobTraits:
 *                           type: string
 *                         JobSkills:
 *                           type: null
 *                         JobTools:
 *                           type: string
 *                         JobIndustries:
 *                           type: string
 *                         town_id:
 *                           type: integer
 *                         status_id:
 *                           type: integer
 *                         job_video:
 *                           type: string
 *                         town_name:
 *                           type: string
 *                         country_name:
 *                           type: string
 *                         region_id:
 *                           type: null
 *                         region_name:
 *                           type: null
 *                         job_status.job_status_id:
 *                           type: integer
 *                         job_status_name:
 *                           type: string
 *                         job_stage_id:
 *                           type: integer
 *                         stage_name:
 *                           type: string
 *                         primary_name:
 *                           type: string
 *                         shadow_name:
 *                           type: string
 *                         experience_year:
 *                           type: string
 *                         experienceYearStart:
 *                           type: integer
 *                         experienceYearEnd:
 *                           type: integer
 *                         employer_profile.user_id:
 *                           type: integer
 *                         employer_profile.profile_pic:
 *                           type: string
 *                         salary_max:
 *                           type: integer
 *                         salary_min:
 *                           type: integer
 *                         currency_symbol:
 *                           type: string
 *                         work_setup:
 *                           type: string
 *                         job_start_date:
 *                           type: string
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         type:
 *                           type: string
 *                         job_stage:
 *                           type: integer
 *                         created_at:
 *                           type: string
 *                         updated_at:
 *                           type: string
 *                         job_type:
 *                           type: string
 *                         grit_score:
 *                           type: null
 *                         job_user_status:
 *                           type: string
 *                         company_id:
 *                           type: integer
 *                         logo:
 *                           type: string
 *                         candidate_status:
 *                           type: string
 *                         TotalUserCount:
 *                           type: string
 *                         totalusershorlisted:
 *                           type: string
 *                         totaluserinterviewed:
 *                           type: string
 *                         profile_url:
 *                           type: string
 *                         JobCamVideo:
 *                           type: boolean
 *                         industry:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               industry_name:
 *                                 type: string
 *                         traits:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               trait_name:
 *                                 type: string
 *                         skills:
 *                           type: array
 *                           items: {}
 *                         tools:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               tool_name:
 *                                 type: string
 *                         profileCompleted:
 *                           type: boolean
 *                         cvCompleted:
 *                           type: boolean
 *                   pageNumber:
 *                    type: integer
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
 *   /candidate/getJobStatus:
 *     get:
 *       summary: Get Candidates Job  Status  Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Candidates Job Status Request
 *       tags:
 *         - Private
 
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
 *                         name:
 *                           type: string
 *                         candidate_job_status_id:
 *                           type: integer
 *                         statusCount:
 *                           type: integer         

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
 *  /minMaxSalary:
 *     get:
 *       summary: Get Min Max Salary Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Min Max Salary Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: currency_id
 *           description: Job Stage
 *           schema:
 *             type: integer
 
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
 *                         minSalary:
 *                           type: integer
 *                         maxSalary:
 *                           type: integer
 *                         minRate:
 *                           type: integer 
 *                         maxRate:
 *                           type: integer  
 *                         currency_id:
 *                           type: integer        

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
 *  /candidate/getJobApplicationStatus:
 *     get:
 *       summary: Get Candidate Job Application Status Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Candidate Job Application Status Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: job_id
 *           description: Job ID
 *           schema:
 *             type: integer
 
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
 *                         MyProfile:
 *                           type: boolean
 *                         CV:
 *                           type: boolean
 *                         QnA:
 *                           type: boolean
 *                         camLink:
 *                           type: boolean  
       

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
 *  /job/getContractDuration:
 *     get:
 *       summary: Get Contract Duration Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Contract Duration Request
 *       tags:
 *         - Private
  
 
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
 *                         contract_duration_id:
 *                           type: integer
 *                         name:
 *                           type: string
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
 *  /profile/profileCompletionDetails:
 *     get:
 *       summary: Get Profile Completion Details Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Profile Completion Details Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
  
 
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
 *                      type: object
 *                      properties:
 *                         cv_basic_info:
 *                           type: integer
 *                         cv_work_life:
 *                           type: integer
 *                         study_life:
 *                           type: integer
 
 *                         cv_refernce:
 *                           type: integer
 
 *                         my_info:
 *                           type:  integer
 
 *                         personality:
 *                           type: integer
 
 *                         cam:
 *                           type: integer
 
       

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
 *  /candidate/getCompanies:
 *     get:
 *       summary: Get Companies List Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Companies List Request
 *       tags:
 *         - Private
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
 *                      type: object
 *                      properties:
 *                         company_id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         website:
 *                           type: boolean
 *                         description:
 *                           type: boolean
 *                         logo:
 *                           type: boolean
 *                         comapny_users:
 *                           type: array
 *                           items:
 *                             type: string
                       
 *                         profile_url:
 *                           type: string
 *                         Followed_flag:
 *                           type: boolean
 
       

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
 *  /candidate/unfollowcompany:
 *     get:
 *       summary: Get Unfollow Company Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Unfollow Company Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: company_id
 *           description: company_id
 *           schema:
 *             type: integer
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
 *                      type: integer
  

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
 *  /candidate/jobcamvideo:
 *     get:
 *       summary: Get Job Cam Video Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Job Cam Video Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: job_id
 *           description: job_id
 *           schema:
 *             type: integer
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
 *                       jobs_user_id:
 *                         type: integer
 *                       user_id:
 *                         type: integer
 *                       job_id:
 *                         type: integer
 *                       candidate_status_id:
 *                         type: integer
 *                       candidate_job_status_id:
 *                         type: integer
 *                       candidate_rejected_by_employer:
 *                         type: integer
 *                       presented:
 *                         type: boolean
 *                       display:
 *                         type: boolean
 *                       comment:
 *                         type: boolean
 *                       recording:
 *                         type: boolean
 *                       job_cam_link:
 *                         type: string
 *                       job_status_id:
 *                         type: integer
 *                       shortlisted:
 *                         type: boolean
 *                       interviewed:
 *                         type: boolean
 *                       viewed:
 *                         type: boolean
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                       job_cam_url:
 *                         type: string
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
 *  /candidate/QuestionsAnswers:
 *     get:
 *       summary: Get Questions Answer Request
 *       security:
 *         - bearerAuth: []
 *       description: Get Questions Answer Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: job_id
 *           description: job_id
 *           schema:
 *             type: integer
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
 *                      type: object
 *                      properties:
 *                       job_id:
 *                         type: integer
 *                       question:
 *                         type: string
 *                       questionnaire_answer:
 *                         type: object
 *                         properties:
 *                           question_id:
 *                              type: integer
 *                           answer:
 *                              type: integer      
 *                           candidate_job_status_id:
 *                              type: integer
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
 *  /candidate/deletecamvideo:
 *     get:
 *       summary: Candidate Video Delete Request
 *       security:
 *         - bearerAuth: []
 *       description: Candidate Video Delete Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 
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
 *  /candidate/deletejobcamvideo:
 *     get:
 *       summary: Candidate Job Cam Video Delete Request
 *       security:
 *         - bearerAuth: []
 *       description: Candidate Job Cam Video Delete Request
 *       tags:
 *         - Private
 *       parameters:
 *         - in: query
 *           name: user_id
 *           description: User ID
 *           schema:
 *             type: integer
 *         - in: query
 *           name: job_id
 *           description: Job ID
 *           schema:
 *             type: integer
 
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
