/**
 * @swagger
 * /employer/getEmployerJobList:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Employer Job List  Request
 *     description: Get Employer Job List  Request
 *     tags:
 *       - Private
 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       job_id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       company_id:
 *                         type: integer
 *                       town_id:
 *                         type: integer
 *                       country_id:
 *                         type: integer
 *                       town:
 *                         type: string
 *                       country:
 *                         type: string
 *                       company:
 *                         type: string
 *                       job_users:
 *                         type: array
 *                         items: {}
 *                       job_logo_url:
 *                         type: string
 *                       shortlist_flag:
 *                         type: boolean
 *                 pageNumber:
 *                   type: integer
 *       400:
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
 *       401:
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
 * 
 *       403:
 *         description: Forbidden 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status :
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 
 * 
 */

/**
 * @swagger
 * /employer/getEmployerProfilePercentage:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Employser Profile Percentage  Request
 *     description: Get Employser Profile Percentage  Request
 *     tags:
 *       - Private
 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: object
 *                   properties:
 *                       myInfo:
 *                         type: integer
 *                       companyInfo:
 *                         type: integer
 *                       myPlan:
 *                         type: integer
 *                       billing:
 *                         type: integer
  
 *       400:
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
 *       401:
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
 * 
 *       403:
 *         description: Forbidden 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status :
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 
 * 
 */

/**
 * @swagger
 * /profile/candidatebadges:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Candidate Badges  Request
 *     description: Get Candidate Badges  Request
 *     tags:
 *       - Private
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                     joined:
 *                       type: boolean
 *                     crayon_vitae:
 *                       type: boolean
 *                     personality_assessment:
 *                       type: boolean
 *                     crayon_cam_video:
 *                       type: boolean
 *                     profile_pic:
 *                       type: boolean
 *                     applied_job:
 *                       type: boolean
 *                     shortlisted:
 *                       type: boolean
 *                     hired:
 *                       type: boolean
 *                     shared_job:
 *                       type: boolean
 *                     referral_signedUp:
 *                       type: boolean
 *                     bounty_earned:
 *                       type: boolean
 *                     created_at:
 *                       type: string
 *                       format: date
 *                     updated_at:
 *                       type: string
 *                       format: date
 *       400:
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
 *       401:
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
 */

/**
 * @swagger
 * /employer/getEmployerBadges:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Employer Badges  Request
 *     description: Get Employer Badges  Request
 *     tags:
 *       - Private
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                     joined:
 *                       type: boolean
 *                     company_info:
 *                       type: boolean
 *                     added_team_member:
 *                       type: boolean
 *                     posted_job:
 *                       type: boolean
 *                     profile_pic:
 *                       type: boolean
 *                     unlocked_cv:
 *                       type: boolean
 *                     shortlisted_candidate:
 *                       type: boolean
 *                     hired:
 *                       type: boolean
 *                     created_at:
 *                       type: string
 *                       format: date
 *                     updated_at:
 *                       type: string
 *                       format: date
 *       400:
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
 *       401:
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
 */

/**
 * @swagger
 * /experiences:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get EExperiences  Request
 *     description: Get Experiences   Request
 *     tags:
 *       - Private
 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       experience_id:
 *                         type: integer
 *                       year:
 *                         type: integer
 *                       year_start:
 *                         type: integer
 *                       year_end:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
 
 *       400:
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
 *       401:
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
 * 
 *       403:
 *         description: Forbidden 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status :
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 
 * 
 */

/**
 * @swagger
 * /candidate/getquestion:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Experiences  Request
 *     description: Get Experiences   Request
 *     tags:
 *       - Private
 *     parameters:
 *       - name: job_id
 *         in: query
 *         required: true
 *         schema:
 *            type: integer
 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       question:
 *                         type: string
 *                       question_id:
 *                         type: integer
 *                       job_id:
 *                         type: integer
  
 
 *       400:
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
 *       401:
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
 * 
 *       403:
 *         description: Forbidden 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status :
 *                   type: string
 *                   default: fail
 *                 message:
 *                   type: string
 *                   default: Forbidden
 *                 role:
 *                   type: integer
 
 * 
 */

/**
 * @swagger
 * /candidate/jobvideos:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Candidate Job Video Request
 *     description: Get Candidate Job Video Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       job_id:
 *                         type: integer
 *                       company_id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       type:
 *                         type: string
 *                       job_stage:
 *                         type: integer
 *                       job_start_date:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                       updated_at:
 *                         type: string
 *                       job_type:
 *                         type: string
 *                       grit_score:
 *                         type: null
 *                       work_setup:
 *                         type: string
 *                       town:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           region_id:
 *                             type: integer
 *                           region:
 *                             type: null
 *                           country:
 *                             type: object
 *                             properties:
 *                               name:
 *                                 type: string
 *                               country_id:
 *                                 type: integer
 *                       job_users:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             job_status_id:
 *                               type: integer
 *                             job_cam_link:
 *                               type: null
 *                             job_user_status:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                             user_id:
 *                               type: integer
 *                       job_status:
 *                         type: object
 *                         properties:
 *                           job_status_id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                       stage:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                       experience:
 *                         type: object
 *                         properties:
 *                           year_start:
 *                             type: integer
 *                           year_end:
 *                             type: integer
 *                       employer_profile:
 *                         type: object
 *                         properties:
 *                           profile_pic:
 *                             type: null
 *                       salary:
 *                         type: object
 *                         properties:
 *                           max:
 *                             type: integer
 *                           min:
 *                             type: integer
 *                           currency:
 *                             type: object
 *                             properties:
 *                               symbol:
 *                                 type: string
 *                       company:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                       profile_url:
 *                         type: string
 *                       job_cam_url:
 *                         type: string
 *                       JobCamVideo:
 *                         type: boolean
 *                       profileCompleted:
 *                         type: boolean
 *                       cvCompleted:
 *                         type: boolean
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
 * /noticeperiod:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Notice Period Request
 *     description: Get Notice Period Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       notice_period_id:
 *                         type: integer
 *                       description:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
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
 * /schools:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Schools Request
 *     description: Get Schools Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       school_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       order:
 *                         type: integer
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
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
 * /association:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Association Request
 *     description: Get Association Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       association_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
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
 * /qualifications:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Qualification Request
 *     description: Get Qualification Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       qualification_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       qualification_type_id:
 *                         type: integer
 *                       order:
 *                         type: integer
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
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
 * /qualificationtypes:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Qualification  Types Request
 *     description: Get Qualification Types Request
 *     tags:
 *       - Private
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       reference:
 *                         type: integer
 *                       level:
 *                         type: integer
  
 *                       created_at:
 *                         type: string
 *                         format: date 
 *                       updated_at:
 *                         type: string
 *                         format: date 
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
 * /salaries:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Salaries  Types Request
 *     description: Get Salaries Types Request
 *     tags:
 *       - Private
 *     parameters:
 *        - name: currency_id
 *          in: query
 *          required: true
 *          schema:
 *            type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       salary_id:
 *                         type: integer
 *                       min:
 *                         type: integer
 *                       max:
 *                         type: integer
 *                       currency_id:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date
 *                       updated_at:
 *                         type: string
 *                         format: date
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
 * /institutions:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Institutions Request
 *     description: Get Institution Request
 *     tags:
 *       - Private
 
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       institution_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       order:
 *                         type: integer
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date 
 *                       updated_at:
 *                         type: string
 *                         format: date 
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
